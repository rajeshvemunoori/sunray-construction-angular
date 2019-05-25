using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Configuration;
using System.Data.OleDb;
using Money = System.Double;
using Shares = System.Double;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.ComponentModel;
using System.Drawing.Imaging;
using System.Drawing;
using System.Web.Services;

public partial class CSNewExpense : System.Web.UI.Page
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    DataSet dsSt = new DataSet();
    DataSet dsDrafts = new DataSet();
    DataSet dsReqId = new DataSet();
    DataSet dsExp = new DataSet();
    DataSet dsOrgDetails = new DataSet();
    DataTable dt = new DataTable();
    Utility ut = new Utility();
    DataRow dr;
    private bool _refreshExp = false;
    int orgId = 0;
    int maxDays = 0;
    string req, expItem, expLineNo, expDate, citiesVstd, comments, orgId1, expenseType, jobCode, phaseCode, JCatCode, compCode, purpose, preAmount, currency,
            autoMFlag, otherFromCity, toFromCity, otherToCity, sts, stsId, managerId, startDate, payMode, preApproved, actualAmount, othercity, detailsFlag, userId,
            masterFlag, autoFlag, agentName, bookedDate, fromCity, toCity, preferredVendor, itinararyNo, fromDate, toDate, accCode, lessNorm, mgrEmail, reimbursement,
            totalTrip, otherPlace, companyCar, outOfCity, quantity, unitPrice, pckUnit, shipCost, balAfterPO, taxAmount1, taxAmount2, taxAmount3, reimburse,
            taxCalCulated, vendPartNo, poLineSeq, csUserId;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            Session["UserID"] = "6261";
            Session.Remove("ReqID");
            Session.Remove("dt");
            Session.Remove("Sectiondt");
            lblLineNO.Text = "1";
            Session["LineNO"] = lblLineNO.Text;
            Session["request"] = "new";

            btnAppend.Attributes.Add("onclick", "javascript:return ValidateCSNewExpense();");

            dvEditPA.Visible = false;
            dvEditAmt.Visible = true;

            string getOrgDetails = xms.getCSOrgDetails(Convert.ToInt32(Session["UserID"]));
            List<CustomerServiceVO> csVO = ser.Deserialize<List<CustomerServiceVO>>(getOrgDetails);
            dsOrgDetails.Tables.Add(Utility.ConvertToDataTable(csVO));

            if (dsOrgDetails.Tables[0].Rows.Count > 0)
            {
                gvCustomers.DataSource = dsOrgDetails;
                gvCustomers.DataBind();

                //dvDynMenu.InnerHtml = "<ul id=menu>";
                //for (int i = 0; i < dsOrgDetails.Tables[0].Rows.Count; i++)
                //{
                //    dvDynMenu.InnerHtml += "<li><a href=#>" + dsOrgDetails.Tables[0].Rows[i]["orgname"].ToString() + " -- " + dsOrgDetails.Tables[0].Rows[i]["compname"].ToString() + " (" + dsOrgDetails.Tables[0].Rows[i]["draftcnt"].ToString() + ")</a>";
                //    string getDraftsDetails = xms.getCSDrafts(6261, Convert.ToInt32(dsOrgDetails.Tables[0].Rows[i]["orgid"].ToString()), dsOrgDetails.Tables[0].Rows[i]["compcode"].ToString());
                //    List<CustomerServiceVO> dsVO = ser.Deserialize<List<CustomerServiceVO>>(getDraftsDetails);
                //    DataSet dsUserDetails = new DataSet();
                //    dsUserDetails.Tables.Add(Utility.ConvertToDataTable(dsVO));
                //    for (int j = 0; j < dsUserDetails.Tables[0].Rows.Count; j++)
                //    {
                //        dvDynMenu.InnerHtml += "<ul><li><a href='#' onclick=callservermethod(" + dsOrgDetails.Tables[0].Rows[i]["orgid"].ToString() + "," + dsUserDetails.Tables[0].Rows[j]["managerid"].ToString() + ",'" + dsUserDetails.Tables[0].Rows[j]["email"].ToString() + "','" + dsOrgDetails.Tables[0].Rows[i]["compcode"].ToString() + "'," + dsUserDetails.Tables[0].Rows[j]["userid"].ToString() + ",'" + dsOrgDetails.Tables[0].Rows[i]["currency"].ToString() + "');>" + dsUserDetails.Tables[0].Rows[j]["username"] + " (" + dsOrgDetails.Tables[0].Rows[i]["draftcnt"].ToString() + ")</a></li></ul>";
                //    }
                //    dvDynMenu.InnerHtml += "</li>";

                //    //string draftItems = xms.getDraftItems(orgId, compCode, userId);
                //    //List<AttachmentVO> lstdrats = ser.Deserialize<List<AttachmentVO>>(draftItems);
                //    //dsDrafts.Tables.Add(Utility.ConvertToDataTable(lstdrats));
                //    //gvAttachments.DataSource = dsDrafts;
                //    //gvAttachments.DataBind();
                //    //Session["dsDrafts"] = dsDrafts;

                //}
                //dvDynMenu.InnerHtml += "</ul>";

                //imgDraft.ImageUrl = "C:\\ExpenseReport\\Thumbnail\\Chrysanthemum.jpg";
                //ResizeImage(100, "C:\\ExpenseReport\\2667_1_281_Entertainment- Meals23.jpg", "C:\\ExpenseReport\\Thumbnail\\2667_1_281_Entertainment- Meals23.jpg");

                RetainVendorFields();

                tdLineItems.Visible = false;
                tdReceipts.Visible = false;
            }
            else
            {
                tdDynMenu.Visible = false;
            }

        }
        else
        {
            lblReqId.Text = hdnReqID.Value;
            lblManager.Text = hdnManagerEmail.Value;
        }
    }

    protected void Show_Hide_OrdersGrid(object sender, EventArgs e)
    {
        ImageButton imgShowHide = (sender as ImageButton);
        GridViewRow row = (imgShowHide.NamingContainer as GridViewRow);
        if (imgShowHide.CommandArgument == "Show")
        {
            row.FindControl("pnlOrders").Visible = true;
            //String orgname = row.Cells[1].Text;
            Label lblOrgName = row.FindControl("lblOrgname") as Label;
            Label lblCompName = row.FindControl("lblCompname") as Label;
            Label hdnMOrgId = row.FindControl("hdnMOrgId") as Label;

            lblOrg.Text = lblOrgName.Text;
            lblComp.Text = lblCompName.Text;

            imgShowHide.CommandArgument = "Hide";
            imgShowHide.ImageUrl = "images/minus.png";
            GridView gvOrders = row.FindControl("gvOrders") as GridView;
            BindOrders(gvOrders, Convert.ToInt32(hdnMOrgId.Text), lblCompName.Text);
        }
        else
        {
            row.FindControl("pnlOrders").Visible = false;
            imgShowHide.CommandArgument = "Show";
            imgShowHide.ImageUrl = "images/plus.png";
        }
    }

    protected void Edit_ProductsGrid(object sender, EventArgs e)
    {
        ImageButton imgShowHide = (sender as ImageButton);
        GridViewRow row = (imgShowHide.NamingContainer as GridViewRow);
        //GridView gvProducts = row.FindControl("gvProducts") as GridView;
        HiddenField hdnFilename = row.FindControl("hdnFilename") as HiddenField;
        Label lblAttachmentId = row.FindControl("lblAttachmentId") as Label;
        hdnDraftId.Value = lblAttachmentId.Text;

        btnAppend.Visible = true;
        if (btnSave.Visible == true)
        {
            btnSave.Visible = false;
            tdLineItems.Visible = false;
            ClearFields();
            BlockFields();
            AddLineNo();
        }
        getRequestId(Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value);
        getApprovalLimit(Convert.ToInt32(hdnSelectedUserID.Value), 1);
        loadData(Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value, hdnDeptCode.Value);
        BindImage(hdnFilename.Value);
    }

    private void BindOrders(GridView gvOrders, int orgId, string compCode)
    {
        string getDraftsDetails = xms.getCSDrafts(Convert.ToInt32(Session["UserID"]), orgId, compCode);
        List<CustomerServiceVO> dsVO = ser.Deserialize<List<CustomerServiceVO>>(getDraftsDetails);
        DataSet dsUserDetails = new DataSet();
        dsUserDetails.Tables.Add(Utility.ConvertToDataTable(dsVO));
        gvOrders.DataSource = dsUserDetails;
        gvOrders.DataBind();
    }

    protected void Show_Hide_ProductsGrid(object sender, EventArgs e)
    {
        ImageButton imgShowHide = (sender as ImageButton);
        GridViewRow row = (imgShowHide.NamingContainer as GridViewRow);
        HiddenField selectedOrgId = row.FindControl("hdnOrgId") as HiddenField;
        HiddenField selectedCompCode = row.FindControl("hdnCompCode") as HiddenField;
        HiddenField selectedUserId = row.FindControl("hdnUserId") as HiddenField;
        HiddenField selectedManagerId = row.FindControl("hdnManagersId") as HiddenField;
        HiddenField selectedCurrency = row.FindControl("hdnsCurrency") as HiddenField;
        HiddenField selectedManagerEmail = row.FindControl("hdnManagersEmail") as HiddenField;
        HiddenField selectedDeptCode = row.FindControl("hdnDeptCodes") as HiddenField;

        hdnCompCode.Value = selectedCompCode.Value;
        hdnSelectedUserID.Value = selectedUserId.Value;
        hdnManagerId.Value = selectedManagerId.Value;
        hdnCurrency.Value = selectedCurrency.Value;
        hdnSelectedOrgid.Value = selectedOrgId.Value;
        lblManager.Text = selectedManagerEmail.Value;
        hdnManagerEmail.Value = selectedManagerEmail.Value;
        hdnDeptCode.Value = selectedDeptCode.Value;

        //int selectedOrgId = Convert.ToInt32((row.NamingContainer as GridView).DataKeys[row.RowIndex].Value);
        if (imgShowHide.CommandArgument == "Show")
        {
            row.FindControl("pnlProducts").Visible = true;
            imgShowHide.CommandArgument = "Hide";
            imgShowHide.ImageUrl = "images/minus.png";
            //int orderId = Convert.ToInt32((row.NamingContainer as GridView).DataKeys[row.RowIndex].Value);
            GridView gvProducts = row.FindControl("gvProducts") as GridView;
            BindProducts(gvProducts, Convert.ToInt32(selectedOrgId.Value), hdnCompCode.Value, Convert.ToInt32(hdnSelectedUserID.Value.ToString()));
        }
        else
        {
            row.FindControl("pnlProducts").Visible = false;
            imgShowHide.CommandArgument = "Show";
            imgShowHide.ImageUrl = "images/plus.png";
        }
    }

    private void BindProducts(GridView gvProducts, int orgId, string compCode, int userId)
    {
        string getDraftsDetails = xms.getDraftItems(orgId, compCode, userId);
        List<AttachmentVO> dsDraftsVO = ser.Deserialize<List<AttachmentVO>>(getDraftsDetails);
        DataSet dsDraftDetails = new DataSet();
        dsDraftDetails.Tables.Add(Utility.ConvertToDataTable(dsDraftsVO));
        gvProducts.DataSource = dsDraftDetails;
        gvProducts.DataBind();
    }

    protected void gvProducts_RowCreated(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            e.Row.Attributes.Add("onmouseover", "this.className='highlight';this.style.cursor = 'hand';");
            e.Row.Attributes.Add("onmouseout", "this.className='normal';this.style.cursor = 'pointer';");
        }
    }

    protected void gvProducts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblAttachmentId = (Label)e.Row.FindControl("lblAttachmentId");
            Label lblFileName = (Label)e.Row.FindControl("lblFileName");
            string originalFilename = lblFileName.Text.ToString();
            string[] splitFilename = lblFileName.Text.ToString().Split('/');

            lblFileName.Text = splitFilename[splitFilename.Length - 1].ToString();

            if (lblFileName.Text.Length > 20)
            {
                lblFileName.Text = SplitStringWithoutSpace(lblFileName.Text);
            }

            //object objTemp = gvProducts.DataKeys[e.Row.RowIndex].Value as object;
            //GridView gv = (GridView)e.Row.FindControl("gvProducts");
            //e.Row.Attributes.Add("onclick", Page.ClientScript.GetPostBackEventReference(gv, "Select$" + e.Row.RowIndex.ToString()));
        }
    }

    public string SplitStringWithoutSpace(string displayText)
    {
        string test = string.Empty;
        string[] sSplit = displayText.Split(' ');
        if (sSplit.Length > 1)
        { test = displayText; }
        else
        {
            int dLength = displayText.Length;
            if (dLength > 20)
            {
                for (int i = 0; i < dLength; i += 20)
                {
                    if (i + 20 > displayText.Length)
                    {
                        test += displayText.Substring(i);
                    }
                    else
                    {
                        test += displayText.Substring(i, 20) + "<br>";
                    }
                }
            }
            else
            {
                test = displayText;
            }
        }
        return test;
    }

    void BindImage(string originalFilename)
    {
        byte[] strReq = xms.getExpDraftsById(originalFilename, 2);
        //MemoryStream ms = new MemoryStream(strReq);
        //System.Drawing.Image returnImage = System.Drawing.Image.FromStream(ms);
        string base64ImageString = ConvertBytesToBase64(strReq);
        imgDraft.ImageUrl = "data:image/jpg;base64," + base64ImageString;
        tdReceipts.Visible = true;
        //imgDraft.ImageUrl = returnImage;

        //Bitmap startBitmap = CreateBitmapFromBytes(imageBytes); // write CreateBitmapFromBytes  
        //Bitmap newBitmap = new Bitmap(newWidth, newHeight);
        //using (Graphics graphics = Graphics.FromImage(newBitmap))
        //{
        //    graphics.DrawImage(startBitmap, new Rectangle(0, 0, newWidth, newHeight), new Rectangle(0, 0, startBitmap.Width, startBitmap.Height), GraphicsUnit.Pixel);
        //}

        //byte[] newBytes = CreateBytesFromBitmap(newBitmap); // write CreateBytesFromBitmap 


        //System.Drawing.Image returnImage;

        //using (var ms = new MemoryStream(strReq))
        //{
        //    returnImage = System.Drawing.Image.FromStream(ms);
        //}
        //// leaving the using block closes ms

        //var img = returnImage.Resize(0);

        //// create new MemoryStream to save the resized image
        //var resultStream = new MemoryStream();
        //img.Save(resultStream, ".jpg");

        //// rewind the stream
        //resultStream.Seek(0, SeekOrigin.Begin);

        ////return resultStream;

    }

    //public static System.Drawing.Image Resize(this System.Drawing.Image imgToResize, int size)
    //{
    //    int sourceWidth = imgToResize.Width;
    //    int sourceHeight = imgToResize.Height;

    //    float nPercent = 0;
    //    float nPercentW = 0;
    //    float nPercentH = 0;

    //    nPercentW = ((float)size / (float)sourceWidth);
    //    nPercentH = ((float)size / (float)sourceHeight);

    //    if (nPercentH < nPercentW)
    //    {
    //        nPercent = nPercentH;
    //    }
    //    else
    //    {
    //        nPercent = nPercentW;
    //    }

    //    int destWidth = (int)(sourceWidth * nPercent);
    //    int destHeight = (int)(sourceHeight * nPercent);

    //    Bitmap b = new Bitmap(destWidth, destHeight);
    //    Graphics g = Graphics.FromImage((System.Drawing.Image)b);
    //    g.InterpolationMode = InterpolationMode.HighQualityBicubic;

    //    g.DrawImage(imgToResize, 0, 0, destWidth, destHeight);
    //    g.Dispose();

    //    return (System.Drawing.Image)b;
    //}

    public string ConvertBytesToBase64(byte[] imageBytes)
    {
        return Convert.ToBase64String(imageBytes);
    }

    void getRequestId(int orgId, string compCode){
        string strReq = xms.getCodes(orgId, compCode, "SEQ");
        List<CodeValueVO> lstReq = ser.Deserialize<List<CodeValueVO>>(strReq);
        DataSet dsReq = new DataSet();
        dsReq.Tables.Add(Utility.ConvertToDataTable(lstReq));
        lblReqId.Text = dsReq.Tables[0].Rows[0]["CodeValue1"].ToString();
        hdnReqID.Value = dsReq.Tables[0].Rows[0]["CodeValue1"].ToString();
    }

    void getApprovalLimit(int userId, int type)
    {
        xms.getApprovalLimit(userId, type);
    }

    //[WebMethod]
    //public static int getRequestId(int orgId, string compCode)
    //{
    //    XmsExpenseServiceImplService xms1 = new XmsExpenseServiceImplService();
    //    JavaScriptSerializer ser1 = new JavaScriptSerializer();

    //    string strReq = xms1.getCodes(orgId, compCode, "SEQ");
    //    List<CodeValueVO> lstReq = ser1.Deserialize<List<CodeValueVO>>(strReq);
    //    DataSet dsReq = new DataSet();
    //    dsReq.Tables.Add(Utility.ConvertToDataTable(lstReq));
    //    return Convert.ToInt32(dsReq.Tables[0].Rows[0]["CodeValue1"]);
    //}

    //[WebMethod]
    //public static double getApprovalLimit(int userId, int type)
    //{
    //    XmsExpenseServiceImplService xms1 = new XmsExpenseServiceImplService();
    //    JavaScriptSerializer ser1 = new JavaScriptSerializer();

    //    return xms1.getApprovalLimit(userId, type);
    //}

    //function to resize image
    public static void ResizeImage(int size, string filePath, string saveFilePath)
    {
        //variables for image dimension/scale
        double newHeight = 0;
        double newWidth = 0;
        double scale = 0;

        //create new image object
        System.Drawing.Bitmap curImage = new System.Drawing.Bitmap(filePath);

        //Determine image scaling
        if (curImage.Height > curImage.Width)
        {
            scale = Convert.ToSingle(size) / curImage.Height;
        }
        else
        {
            scale = Convert.ToSingle(size) / curImage.Width;
        }
        if (scale < 0 || scale > 1) { scale = 1; }

        //New image dimension
        newHeight = Math.Floor(Convert.ToSingle(curImage.Height) * scale);
        newWidth = Math.Floor(Convert.ToSingle(curImage.Width) * scale);

        //Create new object image
        //System.Drawing.Bitmap newImage = new System.Drawing.Bitmap(curImage, Utils.CInteger(newWidth), Utils.CInteger(newHeight));
        Bitmap newImage = new Bitmap(curImage, 225, 400);
        Graphics imgDest = Graphics.FromImage(newImage);
        imgDest.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
        imgDest.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
        //imgDest.PixelOffsetMode = System.Drawing.Drawing2D.PixelOffsetMode.HighQuality;
        imgDest.CompositingQuality = System.Drawing.Drawing2D.CompositingQuality.HighQuality;
        ImageCodecInfo[] info = ImageCodecInfo.GetImageEncoders();
        EncoderParameters param = new EncoderParameters(1);
        param.Param[0] = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, 100L);

        //Draw the object image
        imgDest.DrawImage(curImage, 0, 0, newImage.Width, newImage.Height);

        //Save image file
        newImage.Save(saveFilePath, info[1], param);

        //Dispose the image objects
        curImage.Dispose();
        newImage.Dispose();
        imgDest.Dispose();
    }

    void loadData(int orgId, string compCode, string deptCode)
    {
        if (Convert.ToInt32(hdnPrevSelOrgId.Value) != orgId)
        {
            hdnPrevSelOrgId.Value = orgId.ToString();
            DataSet dsCodes = new DataSet();
            DataSet dsItems = new DataSet();
            DataTable dtCodes = new DataTable();
            string expCodes = xms.getExpCodes(orgId, compCode, 2);
            Session["Codes"] = expCodes;
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            dsCodes.Tables.Add(Utility.ConvertToDataTable(codes));
            Session["dsCodes"] = dsCodes;
            dtCodes = dsCodes.Tables[0];

            string expItem = xms.getExpItemsByDept(orgId, compCode, deptCode, 1, string.Empty);
            List<DeptVO> eItems = ser.Deserialize<List<DeptVO>>(expItem);
            dsItems.Tables.Add(Utility.ConvertToDataTable(eItems));
            Session["dsItems"] = dsItems;
            ddlEditExpenseItem.DataSource = dsItems;
            ddlEditExpenseItem.DataBind();
            ddlEditExpenseItem.Items.Insert(0, "Please Select");
            ddlEditExpenseItem.Items.FindByText("Please Select").Value = "0";

            //Payment Types
            string exprPymt = "CodeID='PAYMENT'";
            DataView viewPymt = new DataView(dtCodes, exprPymt, "CODEID", DataViewRowState.CurrentRows);
            ddlEditPaymentType.DataSource = viewPymt;
            ddlEditPaymentType.DataBind();
            ddlEditPaymentType.Items.Insert(0, "Please Select");
            ddlEditPaymentType.Items.FindByText("Please Select").Value = "0";
            ddlEditPaymentType.SelectedValue = "Credit Card Corporate";

            //Cities
            string exprCities = "CodeID='USCITIES'";
            DataView viewCities = new DataView(dtCodes, exprCities, "CODEID", DataViewRowState.CurrentRows);
            viewCities.Sort = "CodeKey ASC";
            ddlEditCity.DataSource = viewCities;
            ddlEditCity.DataBind();
            ddlEditCity.Items.Insert(0, "Please Select");
            ddlEditCity.Items.FindByText("Please Select").Value = "0";
            if (Session["City"].ToString() == "")
                ddlEditCity.SelectedValue = "0";
            else
                ddlEditCity.SelectedValue = Session["City"].ToString();

            //FromCity
            ddlEditFromcity.DataSource = viewCities;
            ddlEditFromcity.DataBind();
            ddlEditFromcity.Items.Insert(0, "Please Select");
            ddlEditFromcity.Items.FindByText("Please Select").Value = "0";
            if (Session["City"].ToString() == "")
                ddlEditFromcity.SelectedValue = "0";
            else
                ddlEditFromcity.SelectedValue = Session["City"].ToString();

            //ToCity
            ddlEditTocity.DataSource = viewCities;
            ddlEditTocity.DataBind();
            ddlEditTocity.Items.Insert(0, "Please Select");
            ddlEditTocity.Items.FindByText("Please Select").Value = "0";

            //ExpenseTypes
            string exprExpType = "CodeID='EXPTYPE'";
            DataView viewExpType = new DataView(dtCodes, exprExpType, "CODEID", DataViewRowState.CurrentRows);
            ddlEditExpType.DataSource = viewExpType;
            ddlEditExpType.DataBind();
            ddlEditExpType.Items.Insert(0, "Please Select");
            ddlEditExpType.Items.FindByText("Please Select").Value = "0";
            ddlEditExpType.SelectedValue = "GENERAL";

            //Max Days
            string exprMaxD = "CodeID='MAXD'";
            DataView viewMaxD = new DataView(dtCodes, exprMaxD, "CODEID", DataViewRowState.CurrentRows);
            maxDays = Convert.ToInt32(viewMaxD[0]["CodeValue1"]);
            hdMaxDate.Value = System.DateTime.Now.AddDays(-maxDays).ToString("MM/dd/yyyy");
            hdMaxDays.Value = maxDays.ToString();

            string exprPPM = "CodeID = 'PPM'";
            DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
            hdnPPM.Value = viewPPM[1]["CodeValue1"].ToString();
            hdnCPM.Value = viewPPM[0]["CodeValue1"].ToString();
            hdnCmpCar.Value = viewPPM[0]["CodeValue2"].ToString();
            hdnPrsnCar.Value = viewPPM[1]["CodeValue2"].ToString();

            //CompCar
            ddlCompCar.DataSource = viewPPM;
            ddlCompCar.DataTextField = "CodeValue2";
            ddlCompCar.DataValueField = "CodeValue2";
            ddlCompCar.DataBind();
        }
        //Jobs
        dvEditJob.Visible = false;
        dvEditPhs.Visible = false;
        dvEditJC.Visible = false;

    }

    void BindVendors(string expItem, DropDownList ddlV, string city)
    {
        string strVend = xms.getPreferredVendors(Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value.ToString(), expItem, city);
        List<VendorsVO> lstVend = ser.Deserialize<List<VendorsVO>>(strVend);
        DataSet dsVend = new DataSet();
        dsVend.Tables.Add(Utility.ConvertToDataTable(lstVend));
        Session["dsvend"] = dsVend;

        if (dsVend.Tables[0].Rows.Count > 0)
        {
            //Bind Preferred Vendors
            ddlV.DataSource = dsVend.Tables[0].DefaultView.ToTable(true, "PreferredVendor");
            ddlV.DataTextField = "PreferredVendor";
            ddlV.DataValueField = "PreferredVendor";
            ddlV.DataBind();
            ddlV.Items.Insert(0, "Please Select");
            ddlV.Items.FindByText("Please Select").Value = "0";
        }
    }

    protected void ddlExpType_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        if (ddl.ID == "ddlExpType")
        {

        }
        else
        {
            if (ddl.SelectedItem.Text == "JOB")
            {
                dvEditJob.Visible = true;

                //Bind Jobs
                BindJobs(ddlEditJobs);
            }
            else if (ddl.SelectedItem.Text == "GENERAL")
            {
                dvEditJob.Visible = false;
                dvEditPhs.Visible = false;
                dvEditJC.Visible = false;
                ddlEditJobs.SelectedValue = "0";
                ddlEditPhases.SelectedValue = "0";
                ddlEditCategories.SelectedValue = "0";
                //ddlEditJobs.Items.Clear();
                //ddlEditPhases.Items.Clear();
                //ddlEditCategories.Items.Clear();
            }
            else
            {
                //ddlEditJobs.Items.Clear();
                //ddlEditPhases.Items.Clear();
                //ddlEditCategories.Items.Clear();
                ddlEditJobs.SelectedValue = "0";
                ddlEditPhases.SelectedValue = "0";
                ddlEditCategories.SelectedValue = "0";
                dvEditJob.Visible = false;
                dvEditPhs.Visible = false;
                dvEditJC.Visible = false;
            }
            RetainFields();
            RetainVendorFields();
            //DivEdit.Visible = true;
            //DivView.Visible = false;
        }
    }

    protected void ddlJobs_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        if (ddl.ID == "ddlJobs")
        {

        }
        else
        {
            if (ddlEditJobs.SelectedValue == "0")
            {
                ddlEditPhases.Items.Clear();
                ddlEditCategories.Items.Clear();
                dvEditPhs.Visible = false;
                dvEditJC.Visible = false;
            }
            else
            {
                dvEditPhs.Visible = true;
                BindPhases(ddlEditPhases, ddlEditJobs);
            }
            RetainFields();
            RetainVendorFields();
            //DivEdit.Visible = true;
            //DivView.Visible = false;
        }
    }

    protected void ddlPhases_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;

        if (ddl.ID == "ddlPhases")
        {

        }
        else
        {
            if (ddlEditPhases.SelectedValue == "0")
            {
                ddlEditCategories.Items.Clear();
                dvEditJC.Visible = false;
            }
            else
            {
                dvEditJC.Visible = true;
                BindCategories(ddlEditCategories, ddlEditPhases);
            }
            RetainFields();
            RetainVendorFields();
        }
    }

    void BindJobs(DropDownList ddl)
    {
        var strJob = xms.getJobCode(Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value.ToString());
        List<JobVO> lstJob = ser.Deserialize<List<JobVO>>(strJob);
        DataSet dsJob = new DataSet();
        dsJob.Tables.Add(Utility.ConvertToDataTable(lstJob));
        ddl.DataSource = dsJob;
        ddl.DataBind();
        ddl.Items.Insert(0, "Please Select");
        ddl.Items.FindByText("Please Select").Value = "0";
    }

    void BindPhases(DropDownList ddlP, DropDownList ddlJ)
    {
        var strPh = xms.getPhsCode(Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value.ToString(), ddlJ.SelectedValue);
        List<JobVO> lstPh = ser.Deserialize<List<JobVO>>(strPh);
        DataSet dsPh = new DataSet();
        dsPh.Tables.Add(Utility.ConvertToDataTable(lstPh));

        ddlP.DataSource = dsPh;
        ddlP.DataBind();
        ddlP.Items.Insert(0, "Please Select");
        ddlP.Items.FindByText("Please Select").Value = "0";
    }

    void BindCategories(DropDownList ddlC, DropDownList ddlP)
    {
        var strJC = xms.getJobCatCode(Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value.ToString(), ddlP.SelectedValue);
        List<JobVO> lstJC = ser.Deserialize<List<JobVO>>(strJC);
        DataSet dsJC = new DataSet();
        dsJC.Tables.Add(Utility.ConvertToDataTable(lstJC));

        ddlC.DataSource = dsJC;
        ddlC.DataBind();
        ddlC.Items.Insert(0, "Please Select");
        ddlC.Items.FindByText("Please Select").Value = "0";
    }

    protected void ddlEditPreVendor_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindAgents();
        if (ddlEditPreVendor.SelectedValue == "0")
            txtEditItNo.Enabled = false;
        else
            txtEditItNo.Enabled = true;
    }

    void BindAgents()
    {
        DataSet dsVend = (DataSet)Session["dsvend"];
        //Bind Agents
        string exprVendor = "PreferredVendor='" + ddlEditPreVendor.SelectedItem.Text + "'";
        DataTable dt = dsVend.Tables[0];
        DataView viewExpType = new DataView(dt, exprVendor, "PreferredVendor", DataViewRowState.CurrentRows);
        ddlEditAgName.DataSource = viewExpType;
        ddlEditAgName.DataTextField = "AgentName";
        ddlEditAgName.DataValueField = "AgentName";
        ddlEditAgName.DataBind();
        ddlEditAgName.Items.Insert(0, "Please Select");
        ddlEditAgName.Items.FindByText("Please Select").Value = "0";

        //DivEdit.Visible = true;
        //DivView.Visible = false;
    }

    protected void CitiesSelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddlCity = sender as DropDownList;
        DataView view = (DataView)Session["Sectiondt"];
        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y")
            {
                BindVendors(ddlEditExpenseItem.SelectedItem.Text, ddlEditPreVendor, ddlCity.SelectedItem.Text);
                ddlEditAgName.Items.Clear();
                RetainVendorFields();
            }
        }
        if (ddlCity.ID == "ddlEditCity")
        {
            //if (ddlCity.SelectedItem.Text == "Other")
            //    dvEditOtherCity.Visible = true;
            //else
            //    dvEditOtherCity.Visible = false;
        }
        else if (ddlCity.ID == "ddlEditFromcity")
        {
            //if (ddlCity.SelectedItem.Text == "Other")
            //    dvEditFromOther.Visible = true;
            //else
            //    dvEditFromOther.Visible = false;

            if (view != null)
            {
                DataTable dt = view.ToTable();
                if (dt.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    if (chkIsOutOfCity.Checked)
                    {
                        dvEditToCity.Visible = true;
                        dvLocalLocation.Visible = false;
                    }
                    else
                    {
                        dvEditToCity.Visible = false;
                        dvLocalLocation.Visible = true;
                    }
                }
            }
            //if (dvEditToCity.Visible == true)
            //{
            //    if (ddlEditTocity.SelectedItem.Text == "Other")
            //        dvEditToOther.Visible = true;
            //    else
            //        dvEditToOther.Visible = false;
            //}
        }
    }

    void RetainFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();

            //AutoMileage Fields
            if (dt.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                dvEditTT.Visible = true;
                dvEditLN.Visible = true;
                dvChkOutOfCity.Visible = true;
                txtEditActAmnt.ReadOnly = true;
                txtEditPreAmnt.ReadOnly = true;
                chkIsOutOfCity.Checked = true;
                dvEditCompCar.Visible = true;
                ddlCompCar.SelectedValue = Session["CompCar"].ToString().ToLower() == "false" ? hdnPrsnCar.Value : hdnCmpCar.Value;
                hdnCodeValue6.Value = dt.Rows[1]["CodeValue1"].ToString();
            }
            else
            {
                dvChkOutOfCity.Visible = false;
                dvEditTT.Visible = false;
                dvEditLN.Visible = false;
                dvEditCompCar.Visible = false;
                txtEditActAmnt.ReadOnly = false;
                txtEditPreAmnt.ReadOnly = false;
                txtEditLocalLocation.Text = string.Empty;
                txtEditTotTrip.Text = string.Empty;
                txtEditLNorm.Text = string.Empty;
                hdnCodeValue6.Value = string.Empty;
            }
            //ExpenseDate Fields
            if (dt.Rows[0]["CodeValue2"].ToString() == "Y")
            {
                dvEditED.Visible = true;
                hdnCodeValue2.Value = dt.Rows[0]["CodeValue2"].ToString();
            }
            else
            {
                dvEditED.Visible = false;
                txtEditExpDate.Text = string.Empty;
                hdnCodeValue2.Value = string.Empty;
            }

            //From/To Date Fields
            if (dt.Rows[0]["CodeValue3"].ToString() == "Y")
            {
                dvEditFD.Visible = true;
                dvEditTD.Visible = true;
                hdnCodeValue3.Value = dt.Rows[0]["CodeValue3"].ToString();
            }
            else
            {
                dvEditFD.Visible = false;
                dvEditTD.Visible = false;
                txtEditFromdate.Text = string.Empty;
                txtEditTodate.Text = string.Empty;
                hdnCodeValue3.Value = string.Empty;
            }

            //CitiesVisited Fields
            if (dt.Rows[0]["CodeValue4"].ToString() == "Y")
            {
                dvEditCV.Visible = true;
                hdnCodeValue4.Value = dt.Rows[0]["CodeValue4"].ToString();
                if (Session["City"].ToString() == "")
                    ddlEditCity.SelectedValue = "0";
                else
                    ddlEditCity.SelectedValue = Session["City"].ToString();
                if (ddlEditCity.SelectedValue.ToLower() != "other")
                {
                    //dvEditOtherCity.Visible = false;


                    //if (lblPopHeading.Text.ToLower().Contains("new"))
                    //{
                    //    DataView view1 = (DataView)Session["Sectiondt"];
                    //    if (view1 != null)
                    //    {
                    //        DataTable dt1 = view1.ToTable();
                    //        if (dt1.Rows[0]["CodeValue1"].ToString() == "Y")
                    //        {
                    //            BindVendors(ddlEditExpenseItem.SelectedItem.Text, ddlEditPreVendor, ddlEditCity.SelectedItem.Text);
                    //            ddlEditAgName.Items.Clear();
                    //            RetainVendorFields();
                    //        }
                    //    }
                    //}
                }
            }
            else
            {
                dvEditCV.Visible = false;
                hdnCodeValue4.Value = string.Empty;
            }

            //From/To City Fields
            if (dt.Rows[0]["CodeValue5"].ToString() == "Y")
            {
                dvEditFromcity.Visible = true;
                dvEditToCity.Visible = true;
                hdnCodeValue5.Value = dt.Rows[0]["CodeValue5"].ToString();
                if (Session["City"].ToString() == "")
                    ddlEditFromcity.SelectedValue = "0";
                else
                    ddlEditFromcity.SelectedValue = Session["City"].ToString();
                if (ddlEditFromcity.SelectedValue.ToLower() != "other")
                {
                    dvEditFromOther.Visible = false;
                    //if (lblPopHeading.Text.ToLower().Contains("new"))
                    //{
                    //    DataView view1 = (DataView)Session["Sectiondt"];
                    //    if (view1 != null)
                    //    {
                    //        DataTable dt1 = view1.ToTable();
                    //        if (dt1.Rows[0]["CodeValue1"].ToString() == "Y")
                    //        {
                    //            BindVendors(ddlEditExpenseItem.SelectedItem.Text, ddlEditPreVendor, ddlEditFromcity.SelectedItem.Text);
                    //            ddlEditAgName.Items.Clear();
                    //            RetainVendorFields();
                    //        }
                    //    }
                    //}
                }
            }
            else
            {
                dvEditFromcity.Visible = false;
                dvEditToCity.Visible = false;
                hdnCodeValue5.Value = string.Empty;
            }

        }
        else
        {
            txtEditActAmnt.Enabled = true;
            dvEditED.Visible = false;
            dvEditFD.Visible = false;
            dvEditTD.Visible = false;
            dvEditCV.Visible = false;
            dvEditFromcity.Visible = false;
            dvEditToCity.Visible = false;
            dvEditTT.Visible = false;
            dvEditLN.Visible = false;
            dvChkOutOfCity.Visible = false;
            dvEditCompCar.Visible = false;
            dvLocalLocation.Visible = false;
        }
    }

    void RetainVendorFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y" && ddlEditPreVendor.Items.Count > 1)
            {
                dvEditVendor.Visible = true;
                dvEditAgName.Visible = true;
                dvEditItNo.Visible = true;
                hdnCodeValue1.Value = dt.Rows[0]["CodeValue1"].ToString();
            }
            else
            {
                dvEditVendor.Visible = false;
                dvEditAgName.Visible = false;
                dvEditItNo.Visible = false;
                hdnCodeValue1.Value = string.Empty;
            }
        }
        else
        {
            dvEditVendor.Visible = false;
            dvEditAgName.Visible = false;
            dvEditItNo.Visible = false;
        }
    }

    void BlockFields()
    {
        dvEditFromcity.Visible = false;
        dvEditToCity.Visible = false;
        dvEditFD.Visible = false;
        dvEditTD.Visible = false;
        dvEditED.Visible = false;
        dvEditCV.Visible = false;
        dvEditTT.Visible = false;
        dvEditLN.Visible = false;
        dvEditReimbt.Visible = false;
        dvEditFromOther.Visible = false;
        dvEditToOther.Visible = false;
        dvEditVendor.Visible = false;
        dvEditAgName.Visible = false;
        dvEditItNo.Visible = false;
        dvEditOtherCity.Visible = false;
        ddlEditExpenseItem.SelectedValue = "0";
        ddlEditExpType.SelectedValue = "GENERAL";
        ddlEditPaymentType.SelectedValue = "Credit Card Corporate";
        dvEditJob.Visible = false;
        dvEditPhs.Visible = false;
        dvEditJC.Visible = false;
        ddlEditJobs.SelectedValue = "0";
        ddlEditPhases.SelectedValue = "0";
        ddlEditCategories.SelectedValue = "0";
    }

    protected void ddlExpenseItem_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        DataSet dsCodes = (DataSet)Session["dsCodes"];
        DataSet dsItems = (DataSet)Session["dsItems"];
        DataTable dtItems = dsItems.Tables[0];

        DataTable dt = new DataTable();
        dt = dsCodes.Tables[0].Clone();
        dt.Rows.Clear();

        for (int i = 0; i < dsCodes.Tables[0].Rows.Count; i++)
        {
            for (int j = 0; j < dtItems.Rows.Count; j++)
            {
                if (dsCodes.Tables[0].Rows[i]["Description"].ToString() == dtItems.Rows[j]["ExpItem"].ToString())
                    dt.ImportRow(dsCodes.Tables[0].Rows[i]);
            }
        }


        string expr = "CodeID = 'EXPITEM' and Description = '" + ddl.SelectedItem.Text + "'";
        DataView view = new DataView(dt, expr, "CodeValue1", DataViewRowState.CurrentRows);
        DataTable dtEItems = view.ToTable();
        if (dtEItems.Rows.Count > 0)
        {
            hdnAcc.Value = dtEItems.Rows[0]["CodeValue1"].ToString();
            hdnExpItem.Value = dtEItems.Rows[0]["codeKey"].ToString();
        }
        else
        {
            hdnAcc.Value = string.Empty;
            hdnExpItem.Value = string.Empty;
        }

        Session["Sectiondt"] = GetExpItemSections(dsCodes.Tables[0]);

        ddlEditCity.SelectedValue = Session["City"].ToString() == string.Empty ? "0" : Session["City"].ToString();
        ddlEditFromcity.SelectedValue = Session["City"].ToString() == string.Empty ? "0" : Session["City"].ToString();
        //ddlEditTocity.SelectedValue = "0";
        dvEditVendor.Visible = false;
        dvEditAgName.Visible = false;
        dvEditItNo.Visible = false;

        RetainFields();
        //DivEdit.Visible = true;
        //DivView.Visible = false;
    }

    DataView GetExpItemSections(DataTable dt)
    {
        DataTable dt1 = dt;
        dt1.DefaultView.RowFilter = "CodeID LIKE '%EXPITEMSECTION%'";
        DataTable dt2 = dt1.DefaultView.ToTable();
        dt2.DefaultView.RowFilter = "CODEKEY = '" + hdnExpItem.Value + "'";
        DataTable dt3 = dt2.DefaultView.ToTable();

        DataView view1 = dt3.DefaultView;
        view1.Sort = "CodeID Asc";
        return view1.ToTable().Rows.Count > 0 ? view1 : null;
    }

    /*void bindRequestIds()
    {
        var strReq = xms.getRequestIDs(userId, Convert.ToDateTime("06/25/2013").ToShortDateString(), Convert.ToDateTime("07/25/2013").ToShortDateString(), 0, orgId);
        List<DropDownVO> lstReq = ser.Deserialize<List<DropDownVO>>(strReq);
        dsReqId.Tables.Add(Utility.ConvertToDataTable(lstReq));
        if (dsReqId.Tables[0].Rows.Count > 0)
        {
            ddlRequestId.DataSource = dsReqId;
            ddlRequestId.DataValueField = dsReqId.Tables[0].Columns["CodeID"].ToString();
            ddlRequestId.DataTextField = dsReqId.Tables[0].Columns["Description"].ToString();
            ddlRequestId.DataBind();
            ddlRequestId.Items.Insert(0, "All");
            ddlRequestId.Items.FindByText("All").Value = "0";
        }
    }

    void bindValues()
    {
        var strExp_All = xms.getExpenses(userId, Convert.ToDateTime("06/25/2013").ToShortDateString(), Convert.ToDateTime("07/25/2013").ToShortDateString(), 0);
        List<ExpDetailsPagesVO> lstExp_All = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp_All);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExp_All));
        Session["dsExp"] = dsExp;

        var strExp = xms.getExpDetailsByReqId(Convert.ToInt32(ddlRequestId.SelectedValue), orgId); //xms.getExpenses(1309, "06/25/2013", "07/25/2013", 2);
        List<ExpeseDetailsVO> lstExp = ser.Deserialize<List<ExpeseDetailsVO>>(strExp);
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstExp));
        gvShowExpItems.DataSource = dsSt;
        gvShowExpItems.DataBind();
        Session["dsSt"] = dsSt;

        DataTable dt = (DataTable)dsSt.Tables[0];
        if (dt.Rows.Count > 0)
        {
            bindData(dt, 0);
        }

        //PictureVO picVOObj = xms.getExpDrafts(281, "IOSMAC", 5963);
        string draftItems = xms.getDraftItems(orgId, compCode, userId);
        List<AttachmentVO> lstdrats = ser.Deserialize<List<AttachmentVO>>(draftItems);
        dsDrafts.Tables.Add(Utility.ConvertToDataTable(lstdrats));
        gvAttachments.DataSource = dsDrafts;
        gvAttachments.DataBind();
        Session["dsDrafts"] = dsDrafts;
    }
    */
    protected void gvShowExpItems_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            e.Row.Attributes.Add("onclick", Page.ClientScript.GetPostBackEventReference(gvShowExpItems, "Select$" + e.Row.RowIndex.ToString()));

            Label lblExpItems = (Label)e.Row.FindControl("lblExpItems");
            lblExpItems.Text = Convert.ToString(DataBinder.Eval(DataBinder.GetDataItem(e.Row), "ExpenseItem")) + " --> " + Environment.NewLine + Convert.ToString(DataBinder.Eval(DataBinder.GetDataItem(e.Row), "ActualAmount"));

        }
    }

    protected void gvShowExpItems_RowCreated(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            e.Row.Attributes.Add("onmouseover", "this.className='highlight';this.style.cursor = 'hand';");
            e.Row.Attributes.Add("onmouseout", "this.className='normal';this.style.cursor = 'pointer';");
        }
    }

    protected override void Render(HtmlTextWriter writer)
    {
        foreach (GridViewRow r in gvShowExpItems.Rows)
        {
            if (r.RowType == DataControlRowType.DataRow)
            {
                Page.ClientScript.RegisterForEventValidation(gvShowExpItems.UniqueID, "Select$" + r.RowIndex);
            }
        }
        
        base.Render(writer);
    }

    protected void gvShowExpItems_SelectedIndexChanged(object sender, EventArgs e)
    {
        //DataSet dsEditExp = (DataSet)Session["dt"];
        GridViewRow row = this.gvShowExpItems.SelectedRow;
        DataTable dt = (DataTable)Session["dt"];
        DataTable dt_Temp = dt.Clone();
        dt_Temp.ImportRow(dt.Rows[row.DataItemIndex]);
        Session["dt_Temp"] = dt_Temp;
        Session["rowIndexVal"] = row.DataItemIndex;
        Session["request"] = "edit";
        btnDelete.Visible = true;
        btnAppend.Visible = true;
        bindData(dt, row.DataItemIndex);
    }

    void bindData(DataTable dt, int rowId)
    {
        lblLineNO.Text = dt.Rows[rowId]["expLineNo"].ToString();
        GetExpItemData(dt, rowId);
    }

    void GetExpItemData(DataTable dsExpEditDetails, int index)
    {
        BlockFields();

        if (dsExpEditDetails.Rows.Count > 0)
        {
            DataSet dsCodes = (DataSet)Session["dsCodes"];
            DataTable dtCodes = dsCodes.Tables[0];

            DataSet dsItems = (DataSet)Session["dsItems"];
            ddlEditExpenseItem.SelectedValue = dsExpEditDetails.Rows[index]["ExpenseItem"].ToString();

            string expHdnItem = "description='" + ddlEditExpenseItem.SelectedValue + "'";
            DataView viewExpItem1 = new DataView(dtCodes, expHdnItem, "CODEID", DataViewRowState.CurrentRows);
            dt = viewExpItem1.ToTable();
            hdnExpItem.Value = dt.Rows[0]["codeKey"].ToString();

            //Payment Types
            ddlEditPaymentType.SelectedValue = dsExpEditDetails.Rows[index]["PaymentID"].ToString();

            //ExpenseTypes
            ddlEditExpType.SelectedValue = dsExpEditDetails.Rows[index]["CodeID_ET"].ToString();

            string expType = string.Empty;
            expType = ddlEditExpType.SelectedItem.Text;
            divExptype.Visible = true;
            txtEditPreAmnt.Enabled = false;
            txtEditActAmnt.Enabled = true;

            if (expType == "GENERAL")
            {
                //ddlEditCategories.Items.Clear();
                //ddlEditPhases.Items.Clear();
                //ddlEditJobs.Items.Clear();
                ddlEditJobs.SelectedValue = "0";
                ddlEditPhases.SelectedValue = "0";
                ddlEditCategories.SelectedValue = "0";

                dvEditJob.Visible = false;
                dvEditPhs.Visible = false;
                dvEditJC.Visible = false;
            }
            else
            {
                dvEditJob.Visible = true;
                dvEditPhs.Visible = true;
                dvEditJC.Visible = true;
                //BindJobs(ddlEditJobs);
                ddlEditJobs.SelectedValue = dsExpEditDetails.Rows[index]["code_Job"].ToString();
                //BindPhases(ddlEditPhases, ddlEditJobs);
                ddlEditPhases.SelectedValue = dsExpEditDetails.Rows[index]["code_Phs"].ToString();
                //BindCategories(ddlEditCategories, ddlEditPhases);
                ddlEditCategories.SelectedValue = dsExpEditDetails.Rows[index]["code_JC"].ToString();
            }
            txtEditActAmnt.ReadOnly = false;
            txtEditPreAmnt.ReadOnly = false;

            //Display fields Begin
            //depending on the values fetched from database for a selected ExpenseItem

            string city = string.Empty;

            DataView viewSec = GetExpItemSections(dtCodes);
            DataTable dtSec = viewSec.ToTable();
            Session["Sectiondt"] = viewSec;

            //ExpenseDate Fields
            if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
            {
                dvEditED.Visible = true;
                //Assign values to ExpenseDate field
                txtEditExpDate.Text = dsExpEditDetails.Rows[index]["ExpenseDate"].ToString();
                hdnCodeValue2.Value = dtSec.Rows[0]["CodeValue2"].ToString();
            }
            else
            {
                dvEditED.Visible = false;
                hdnCodeValue2.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
            {
                dvEditFD.Visible = true;
                dvEditTD.Visible = true;
                //Assign values to From/To Dates field
                txtEditFromdate.Text = dsExpEditDetails.Rows[index]["FromDate"].ToString();
                txtEditTodate.Text = dsExpEditDetails.Rows[index]["ToDate"].ToString();
                hdnCodeValue3.Value = dtSec.Rows[0]["CodeValue3"].ToString();
            }
            else
            {
                dvEditFD.Visible = false;
                dvEditTD.Visible = false;
                hdnCodeValue3.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
            {
                dvEditCV.Visible = true;
                //Assign values to CitiesVisited field
                if (dsExpEditDetails.Rows[index]["CitiesVisited"].ToString() == string.Empty)
                    ddlEditCity.SelectedValue = "0";
                else
                {
                    ddlEditCity.SelectedValue = dsExpEditDetails.Rows[index]["CitiesVisited"].ToString();
                    city = ddlEditCity.SelectedItem.Text;
                }
                if (ddlEditCity.SelectedItem.Text == "Other")
                {
                    dvEditOtherCity.Style.Add("Display", "block");
                    txtEditOtherCity.Text = dsExpEditDetails.Rows[index]["OtherCities"].ToString();
                    city = txtEditOtherCity.Text;
                }
                else
                    dvEditOtherCity.Style.Add("Display", "none");
                hdnCodeValue4.Value = dtSec.Rows[0]["CodeValue4"].ToString();
            }
            else
            {
                dvEditCV.Visible = false;
                hdnCodeValue4.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
            {
                dvEditFromcity.Visible = true;
                dvEditToCity.Visible = true;
                //Assign values to FromCity field
                if (dsExpEditDetails.Rows[index]["fromCity"].ToString() == string.Empty)
                    ddlEditFromcity.SelectedValue = "0";
                else
                {
                    ddlEditFromcity.SelectedValue = dsExpEditDetails.Rows[index]["fromCity"].ToString();
                    city = ddlEditFromcity.SelectedItem.Text;
                }

                if (ddlEditFromcity.SelectedValue.ToLower() == "other")
                {
                    dvEditFromOther.Visible = true;
                    txtEditOtherFromCity.Text = dsExpEditDetails.Rows[index]["FromOtherCity"].ToString();
                    city = txtEditOtherFromCity.Text;
                }
                else
                    dvEditFromOther.Style.Add("Display", "none");

                //Assign values to ToCity field
                if (dsExpEditDetails.Rows[index]["toCity"].ToString() == string.Empty)
                    ddlEditTocity.SelectedValue = "0";
                else
                    ddlEditTocity.SelectedValue = dsExpEditDetails.Rows[index]["toCity"].ToString();

                if (ddlEditTocity.SelectedValue.ToLower() == "other")
                {
                    dvEditToOther.Visible = true;
                    txtEditOtherToCity.Text = dsExpEditDetails.Rows[index]["ToOtherCity"].ToString();
                }
                else
                    dvEditToOther.Style.Add("Display", "none");
                hdnCodeValue5.Value = dtSec.Rows[0]["CodeValue5"].ToString();
            }
            else
            {
                dvEditFromcity.Visible = false;
                dvEditToCity.Visible = false;
                hdnCodeValue5.Value = string.Empty;
            }

            if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                dvEditTT.Visible = true;
                dvEditLN.Visible = true;
                dvEditCompCar.Visible = true;
                dvLocalLocation.Style["display"] = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "false" ? "block" : "none";
                chkIsOutOfCity.Checked = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "true" ? true : false;
                txtEditLocalLocation.Text = dsExpEditDetails.Rows[index]["otherPlace"].ToString();
                ddlCompCar.SelectedValue = dsExpEditDetails.Rows[index]["companyCar"].ToString();
                txtEditTotTrip.Text = dsExpEditDetails.Rows[index]["TotalTrip"].ToString();
                txtEditLNorm.Text = dsExpEditDetails.Rows[index]["LessNorm"].ToString();
                txtEditReimbt.Text = dsExpEditDetails.Rows[index]["Reimbt"].ToString();
                txtEditActAmnt.ReadOnly = true;
                txtEditPreAmnt.ReadOnly = true;
                if (chkIsOutOfCity.Checked)
                {
                    dvEditToCity.Visible = true;
                    dvLocalLocation.Visible = false;
                    dvChkOutOfCity.Visible = false;
                }
                else
                {
                    dvEditToCity.Visible = false;
                    dvLocalLocation.Visible = true;
                    dvChkOutOfCity.Visible = true;
                }
                hdnCodeValue6.Value = dtSec.Rows[1]["CodeValue1"].ToString();
            }
            else
            {
                dvChkOutOfCity.Visible = false;
                dvEditTT.Visible = false;
                dvEditLN.Visible = false;
                dvEditCompCar.Visible = false;
                txtEditActAmnt.ReadOnly = false;
                txtEditPreAmnt.ReadOnly = false;
                hdnCodeValue6.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
            {
                //BindVendors(ddlEditExpenseItem.SelectedItem.Text, ddlEditPreVendor, city);
                DataSet dsVend = (DataSet)Session["dsvend"];
                DataTable dsVendors = dsVend.Tables[0];
                if (dsVendors.Rows.Count >= 1)
                {
                    dvEditVendor.Visible = true;
                    dvEditAgName.Visible = true;
                    dvEditItNo.Visible = true;
                    if (dsExpEditDetails.Rows[index]["preferredVendor"].ToString() == string.Empty)
                        ddlEditPreVendor.SelectedValue = "0";
                    else
                        ddlEditPreVendor.SelectedValue = dsExpEditDetails.Rows[index]["preferredVendor"].ToString();
                    //BindAgents();
                    if (dsExpEditDetails.Rows[index]["agentName"].ToString() == string.Empty)
                        ddlEditAgName.SelectedValue = "0";
                    else
                        ddlEditAgName.SelectedValue = dsExpEditDetails.Rows[index]["agentName"].ToString();
                }
                else
                {
                    dvEditVendor.Visible = false;
                    dvEditAgName.Visible = false;
                    dvEditItNo.Visible = false;
                }
            }
            else
            {
                dvEditVendor.Visible = false;
                dvEditAgName.Visible = false;
                dvEditItNo.Visible = false;
            }
            //Display fields End

            hdnAcc.Value = dsExpEditDetails.Rows[index]["AccountCode"].ToString();
            txtEditPreAmnt.Text = dsExpEditDetails.Rows[index]["preAmount"].ToString();
            txtEditActAmnt.Text = dsExpEditDetails.Rows[index]["ActualAmount"].ToString();
            txtEditComments.Text = dsExpEditDetails.Rows[index]["Comments"].ToString();

            //DivEdit.Visible = true;
            //DivView.Visible = false;
        }
    }
    
    void ClearFields()
    {
        lblLineNO.Text = string.Empty;
        //ddlEditJobs.Items.Clear();
        //ddlEditPhases.Items.Clear();
        //ddlEditCategories.Items.Clear();
        txtEditOtherCity.Text = string.Empty;
        txtEditExpDate.Text = string.Empty;
        txtEditComments.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;
        ddlEditCity.SelectedIndex = 0;
        txtEditFromdate.Text = string.Empty;
        txtEditTodate.Text = string.Empty;
        if (ddlEditPreVendor.Items.Count > 0)
            ddlEditPreVendor.SelectedIndex = 0;
        if (ddlEditAgName.Items.Count > 0)
            ddlEditAgName.SelectedIndex = 0;
        txtEditItNo.Text = string.Empty;
        ddlEditFromcity.SelectedIndex = 0;
        txtEditOtherFromCity.Text = string.Empty;
        txtEditOtherToCity.Text = string.Empty;
        ddlEditTocity.SelectedIndex = 0;
        txtEditTotTrip.Text = string.Empty;
        txtEditLNorm.Text = string.Empty;
        txtEditReimbt.Text = string.Empty;
        txtEditPreAmnt.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;        
        if (dvChkOutOfCity.Visible == true){
            chkIsOutOfCity.Checked = true;
            dvEditCompCar.Visible = false;
        }
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);

            if (_refreshExp)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshExp", "setTimeout('refreshExp();', 800);", true);
        }
    }

    void AddColumns()
    {
        dt.Columns.Add("EXP_TYPE", Type.GetType("System.String"));
        dt.Columns.Add("JOB_CODE", Type.GetType("System.String"));
        dt.Columns.Add("JPHS_CODE", Type.GetType("System.String"));
        dt.Columns.Add("JCAT_CODE", Type.GetType("System.String"));
        dt.Columns.Add("CodeID_ET", Type.GetType("System.String"));
        dt.Columns.Add("Code_Job", Type.GetType("System.String"));
        dt.Columns.Add("Code_Phs", Type.GetType("System.String"));
        dt.Columns.Add("Code_JC", Type.GetType("System.String"));
        dt.Columns.Add("CodeID", Type.GetType("System.String"));
        dt.Columns.Add("ExpenseItem", Type.GetType("System.String"));
        dt.Columns.Add("ExpenseDate", Type.GetType("System.String"));
        dt.Columns.Add("CitiesVisited", Type.GetType("System.String"));
        dt.Columns.Add("PreAmount", Type.GetType("System.String"));
        dt.Columns.Add("Comments", Type.GetType("System.String"));
        dt.Columns.Add("FileName", Type.GetType("System.String"));
        dt.Columns.Add("RequestID", Type.GetType("System.String"));
        dt.Columns.Add("ExpLineNo", Type.GetType("System.String"));
        dt.Columns.Add("StateID", Type.GetType("System.String"));
        dt.Columns.Add("ActualAmount", Type.GetType("System.String"));
        dt.Columns.Add("PaymentID", Type.GetType("System.String"));
        dt.Columns.Add("PaymentType", Type.GetType("System.String"));
        dt.Columns.Add("OtherCities", Type.GetType("System.String"));
        dt.Columns.Add("PreferredVendor", Type.GetType("System.String"));
        dt.Columns.Add("AgentName", Type.GetType("System.String"));
        dt.Columns.Add("ItinararyNo", Type.GetType("System.String"));
        dt.Columns.Add("FromDate", Type.GetType("System.String"));
        dt.Columns.Add("ToDate", Type.GetType("System.String"));
        dt.Columns.Add("FromCity", Type.GetType("System.String"));
        dt.Columns.Add("toCity", Type.GetType("System.String"));
        dt.Columns.Add("FromOtherCity", Type.GetType("System.String"));
        dt.Columns.Add("ToOtherCity", Type.GetType("System.String"));
        dt.Columns.Add("TotalTrip", Type.GetType("System.String"));
        dt.Columns.Add("LessNorm", Type.GetType("System.String"));
        dt.Columns.Add("Reimbt", Type.GetType("System.String"));
        dt.Columns.Add("AccountCode", Type.GetType("System.String"));
        dt.Columns.Add("AttachmentCnt", Type.GetType("System.String"));
        dt.Columns.Add("companyCar", Type.GetType("System.String"));
        dt.Columns.Add("otherPlace", Type.GetType("System.String"));
        dt.Columns.Add("outOfCity", Type.GetType("System.String"));

    }

    protected void btnAppend_Click(object sender, EventArgs e)
    {
        int reqId = Convert.ToInt32(lblReqId.Text);
        int seqId = Convert.ToInt32(lblLineNO.Text);
        if (Session["request"] == "new")
        {
            if (Session["dt"] == null)
                AddColumns();
            else
                dt = (DataTable)Session["dt"];

            double amnt = 0;
            DataView view = (DataView)Session["Sectiondt"];
            if (view != null)
            {
                DataTable dtCode = view.ToTable();

                if (dtCode.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                }
                else
                {
                    amnt = ut.NullSafeDouble(txtEditActAmnt.Text);
                }
            }
            ExpeseDetailsVO expenseDetails = new ExpeseDetailsVO();
            expenseDetails.citiesVstd = ddlEditCity.SelectedValue;
            expenseDetails.comments = txtEditComments.Text;
            expenseDetails.compCode = hdnCompCode.Value.ToString();
            expenseDetails.expDate = txtEditExpDate.Text;
            expenseDetails.expItem = ddlEditExpenseItem.SelectedItem.Text;
            expenseDetails.expLineNo = seqId;
            expenseDetails.expType = ddlEditExpType.SelectedValue;
            expenseDetails.orgId = Convert.ToInt32(hdnSelectedOrgid.Value);
            expenseDetails.reqId = reqId;
            expenseDetails.amtSpent = amnt;

            if (ddlEditExpType.SelectedItem.Text == "GENERAL")
            {
                expenseDetails.JCatCode = string.Empty;
                expenseDetails.jobCode = string.Empty;
                expenseDetails.phaseCode = string.Empty;
            }
            else
            {
                expenseDetails.JCatCode = ddlEditCategories.SelectedValue;
                expenseDetails.jobCode = ddlEditJobs.SelectedValue;
                expenseDetails.phaseCode = ddlEditPhases.SelectedValue;
            }

            //int expId = xms.addExpDetails_Temp(expenseDetails);

            if (txtEditPreAmnt.Text == string.Empty)
                txtEditPreAmnt.Text = "0";

            if (txtEditActAmnt.Text == string.Empty)
                txtEditActAmnt.Text = "0";

            dr = dt.NewRow();
            if (ddlEditExpType.SelectedItem.Text == "GENERAL")
            {
                dr["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text.ToUpper();
                dr["JOB_CODE"] = string.Empty;
                dr["JPHS_CODE"] = string.Empty;
                dr["JCAT_CODE"] = string.Empty;
                dr["CodeID_ET"] = ddlEditExpType.SelectedValue.ToUpper();
                dr["Code_Job"] = string.Empty;
                dr["Code_Phs"] = string.Empty;
                dr["Code_JC"] = string.Empty;
                dr["CodeID"] = ddlEditExpenseItem.SelectedValue;
                dr["ExpenseItem"] = ddlEditExpenseItem.SelectedItem.Text;
                dr["ExpenseDate"] = txtEditExpDate.Text;
                dr["otherPlace"] = txtEditLocalLocation.Text;
                dr["companyCar"] = dvEditCompCar.Visible == true ? ddlCompCar.SelectedValue : string.Empty;
                dr["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";

                if (dvEditCV.Visible == true)
                {
                    if (ddlEditCity.SelectedValue == "0")
                        dr["CitiesVisited"] = string.Empty;
                    else if (ddlEditCity.SelectedItem.Text == "Other")
                    {
                        dvEditOtherCity.Visible = true;
                        dr["OtherCities"] = txtEditOtherCity.Text;
                        dr["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                    }
                    else
                        dr["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                }
                else
                {
                    dr["OtherCities"] = txtEditOtherFromCity.Text;
                    dr["CitiesVisited"] = ddlEditFromcity.SelectedItem.Text;
                }
                dr["Comments"] = txtEditComments.Text;
                dr["FileName"] = string.Empty;
                dr["RequestID"] = reqId;
                dr["ExpLineNo"] = seqId;
                dr["StateID"] = ddlEditCity.SelectedItem.Text;
                dr["ActualAmount"] = amnt;
                dr["PreAmount"] = 0;
                dr["PaymentID"] = ddlEditPaymentType.SelectedValue;

                if (ddlEditPaymentType.SelectedValue == "0")
                    dr["PaymentType"] = string.Empty;
                else
                    dr["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;

                if (dvEditVendor.Visible == true)
                {
                    if (ddlEditPreVendor.SelectedValue == "0")
                        dr["PreferredVendor"] = string.Empty;
                    else
                        dr["PreferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                }
                else
                    dr["PreferredVendor"] = string.Empty;

                if (dvEditAgName.Visible == true)
                {
                    if (ddlEditAgName.SelectedValue == "0")
                        dr["AgentName"] = string.Empty;
                    else
                        dr["AgentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                }
                else
                    dr["AgentName"] = string.Empty;

                dr["ItinararyNo"] = txtEditItNo.Text;
                dr["FromDate"] = txtEditFromdate.Text;
                dr["ToDate"] = txtEditTodate.Text;

                if (dvEditFromcity.Visible == true)
                {
                    if (ddlEditFromcity.SelectedValue == "0")
                        dr["FromCity"] = string.Empty;
                    else
                        dr["FromCity"] = ddlEditFromcity.SelectedItem.Text;
                    if (ddlEditFromcity.SelectedItem.Text == "Other")
                        dr["FromOtherCity"] = txtEditOtherFromCity.Text;
                    else
                        dr["FromOtherCity"] = string.Empty;
                }
                else
                {
                    dr["FromCity"] = string.Empty;
                    dr["FromOtherCity"] = string.Empty;
                }
                if (dvEditToCity.Visible == true)
                {
                    if (ddlEditTocity.SelectedValue == "0")
                        dr["toCity"] = string.Empty;
                    else
                        dr["toCity"] = ddlEditTocity.SelectedItem.Text;
                    if (ddlEditTocity.SelectedItem.Text == "Other")
                        dr["ToOtherCity"] = txtEditOtherToCity.Text;
                    else
                        dr["ToOtherCity"] = string.Empty;
                }
                else
                {
                    dr["toCity"] = string.Empty;
                    dr["ToOtherCity"] = string.Empty;
                }
                dr["TotalTrip"] = ut.NullSafeInteger(txtEditTotTrip.Text);
                dr["LessNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                dr["Reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                dr["AccountCode"] = hdnAcc.Value;
                dr["AttachmentCnt"] = "0";
            }
            else
            {
                dr["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text;
                dr["JOB_CODE"] = ddlEditJobs.SelectedItem.Text;
                dr["JPHS_CODE"] = ddlEditPhases.SelectedItem.Text;
                dr["JCAT_CODE"] = ddlEditCategories.SelectedItem.Text;
                dr["CodeID_ET"] = ddlEditExpType.SelectedValue;
                dr["Code_Job"] = ddlEditJobs.SelectedValue;
                dr["Code_Phs"] = ddlEditPhases.SelectedValue;
                dr["Code_JC"] = ddlEditCategories.SelectedValue;
                dr["CodeID"] = ddlEditExpenseItem.SelectedValue;
                dr["ExpenseItem"] = ddlEditExpenseItem.SelectedItem.Text;
                dr["ExpenseDate"] = txtEditExpDate.Text;
                dr["otherPlace"] = txtEditLocalLocation.Text;
                dr["companyCar"] = dvEditCompCar.Visible == true ? ddlCompCar.SelectedValue : string.Empty;
                dr["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";

                if (dvEditCV.Visible == true)
                {
                    if (ddlEditCity.SelectedValue == "0")
                        dr["CitiesVisited"] = string.Empty;
                    else if (ddlEditCity.SelectedItem.Text == "Other")
                    {
                        //dvEditOtherCity.Visible = true;
                        dr["OtherCities"] = txtEditOtherCity.Text;
                        dr["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                    }
                    else
                        dr["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                }
                else
                {
                    dr["OtherCities"] = txtEditOtherFromCity.Text;
                    dr["CitiesVisited"] = ddlEditFromcity.SelectedItem.Text;
                }
                dr["Comments"] = txtEditComments.Text;
                dr["FileName"] = string.Empty;
                dr["RequestID"] = reqId;
                dr["ExpLineNo"] = seqId;
                dr["StateID"] = ddlEditCity.SelectedValue;
                dr["ActualAmount"] = amnt;
                dr["PreAmount"] = 0;
                dr["PaymentID"] = ddlEditPaymentType.SelectedValue;

                if (ddlEditPaymentType.SelectedValue == "0")
                    dr["PaymentType"] = string.Empty;
                else
                    dr["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;

                if (dvEditVendor.Visible == true)
                {
                    if (ddlEditPreVendor.SelectedValue == "0")
                        dr["PreferredVendor"] = string.Empty;
                    else
                        dr["PreferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                }
                else
                    dr["PreferredVendor"] = string.Empty;

                if (dvEditAgName.Visible == true)
                {
                    if (ddlEditAgName.SelectedValue == "0")
                        dr["AgentName"] = string.Empty;
                    else
                        dr["AgentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                }
                else
                    dr["AgentName"] = string.Empty;

                dr["ItinararyNo"] = txtEditItNo.Text;
                dr["FromDate"] = txtEditFromdate.Text;
                dr["ToDate"] = txtEditTodate.Text;

                if (dvEditFromcity.Visible == true)
                {
                    if (ddlEditFromcity.SelectedValue == "0")
                        dr["FromCity"] = string.Empty;
                    else
                        dr["FromCity"] = ddlEditFromcity.SelectedItem.Text;
                    if (ddlEditFromcity.SelectedItem.Text == "Other")
                        dr["FromOtherCity"] = txtEditOtherFromCity.Text;
                    else
                        dr["FromOtherCity"] = string.Empty;
                }
                else
                {
                    dr["FromCity"] = string.Empty;
                    dr["FromOtherCity"] = string.Empty;
                }
                if (dvEditToCity.Visible == true)
                {
                    if (ddlEditTocity.SelectedValue == "0")
                        dr["toCity"] = string.Empty;
                    else
                        dr["toCity"] = ddlEditTocity.SelectedItem.Text;
                    if (ddlEditTocity.SelectedItem.Text == "Other")
                        dr["ToOtherCity"] = txtEditOtherToCity.Text;
                    else
                        dr["ToOtherCity"] = string.Empty;
                }
                else
                {
                    dr["toCity"] = string.Empty;
                    dr["ToOtherCity"] = string.Empty;
                }
                dr["TotalTrip"] = ut.NullSafeInteger(txtEditTotTrip.Text);
                dr["LessNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                dr["Reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                dr["AccountCode"] = hdnAcc.Value;
                dr["AttachmentCnt"] = "0";

            }
            dt.Rows.Add(dr);
            dt.AcceptChanges();
            Session["dt"] = dt;
            //Session.Remove("dtSelDfts");

            gvShowExpItems.DataSource = dt;
            gvShowExpItems.DataBind();
            tdLineItems.Visible = true;
            ClearFields();
            btnSave.Visible = true;
            AddLineNo();
            BlockFields();
            btnAppend.Visible = false;
        }
        else
        {
            dt = (DataTable)Session["dt"];
            DataTable dt_Temp = (DataTable)Session["dt_Temp"];

            int edFlag = 0;
            if (ddlEditExpType.SelectedItem.Text != dt_Temp.Rows[0]["EXP_TYPE"].ToString())
                edFlag = 1;
            else if (ddlEditExpenseItem.SelectedItem.Text != dt_Temp.Rows[0]["ExpenseItem"].ToString())
                edFlag = 1;
            else if (txtEditExpDate.Text != dt_Temp.Rows[0]["ExpenseDate"].ToString())
                edFlag = 1;
            else if (txtEditPreAmnt.Text != dt_Temp.Rows[0]["PreAmount"].ToString())
                edFlag = 1;
            else if (txtEditActAmnt.Text != dt_Temp.Rows[0]["ActualAmount"].ToString())
                edFlag = 1;
            else if (ddlEditPaymentType.SelectedItem.Text != dt_Temp.Rows[0]["PaymentType"].ToString())
                edFlag = 1;
            else if (dvEditCV.Visible == true)
            {
                if (ddlEditCity.SelectedItem.Text != dt_Temp.Rows[0]["CitiesVisited"].ToString())
                    edFlag = 1;
            }
            else if (txtEditComments.Text != dt_Temp.Rows[0]["Comments"].ToString())
                edFlag = 1;
            if (ddlEditCity.SelectedItem.Text == "Other")
            {
                if (txtEditOtherCity.Text != dt_Temp.Rows[0]["OtherCities"].ToString())
                    edFlag = 1;
            }
            if (ddlEditExpType.SelectedItem.Text == "JOB")
            {
                if (ddlEditJobs.SelectedItem.Text != dt_Temp.Rows[0]["JOB_CODE"].ToString())
                    edFlag = 1;
                else if (ddlEditPhases.SelectedItem.Text != dt_Temp.Rows[0]["JPHS_CODE"].ToString())
                    edFlag = 1;
                else if (ddlEditCategories.SelectedItem.Text != dt_Temp.Rows[0]["JCAT_CODE"].ToString())
                    edFlag = 1;
            }
            if (dvEditVendor.Visible == true)
                if (ddlEditPreVendor.SelectedItem.Text != dt_Temp.Rows[0]["PreferredVendor"].ToString())
                    edFlag = 1;
            if (dvEditAgName.Visible == true && ddlEditAgName.Items.Count > 0)
                if (ddlEditAgName.SelectedItem.Text != dt_Temp.Rows[0]["AgentName"].ToString())
                    edFlag = 1;
            if (dvEditItNo.Visible == true)
                if (txtEditItNo.Text != dt_Temp.Rows[0]["ItinararyNo"].ToString())
                    edFlag = 1;
            if (dvEditFD.Visible == true)
                if (txtEditFromdate.Text != dt_Temp.Rows[0]["FromDate"].ToString())
                    edFlag = 1;
            if (dvEditTD.Visible == true)
                if (txtEditTodate.Text != dt_Temp.Rows[0]["ToDate"].ToString())
                    edFlag = 1;
            if (dvEditTT.Visible == true)
                if (txtEditTotTrip.Text != dt_Temp.Rows[0]["TotalTrip"].ToString())
                    edFlag = 1;
            if (dvEditLN.Visible == true)
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["LessNorm"].ToString())
                    edFlag = 1;
            if (dvChkOutOfCity.Visible == true)
                if (chkIsOutOfCity.Checked != (dt_Temp.Rows[0]["outOfCity"].ToString() == "1" ? true : false))
                    edFlag = 1;
            if (dvLocalLocation.Visible == true)
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["otherPlace"].ToString())
                    edFlag = 1;
            if (dvEditCompCar.Visible == true)
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["companyCar"].ToString())
                    edFlag = 1;
            if (dvEditReimbt.Visible == true)
                if (txtEditReimbt.Text != dt_Temp.Rows[0]["Reimbt"].ToString())
                    edFlag = 1;
            if (dvEditFromcity.Visible == true)
                if (ddlEditFromcity.SelectedItem.Text != dt_Temp.Rows[0]["FromCity"].ToString())
                    edFlag = 1;
            if (dvEditToCity.Visible == true)
                if (ddlEditTocity.SelectedItem.Text != dt_Temp.Rows[0]["toCity"].ToString())
                    edFlag = 1;
            if (dvEditFromOther.Visible == true)
                if (txtEditOtherFromCity.Text != dt_Temp.Rows[0]["FromOtherCity"].ToString())
                    edFlag = 1;
            if (dvEditToOther.Visible == true)
                if (txtEditOtherToCity.Text != dt_Temp.Rows[0]["ToOtherCity"].ToString())
                    edFlag = 1;

            if (txtEditComments.Text != dt_Temp.Rows[0]["Comments"].ToString())
                edFlag = 1;

            if (edFlag == 1)
            {
                double amnt = 0;
                DataView view = (DataView)Session["Sectiondt"];
                if (view != null)
                {
                    DataTable dtCode = view.ToTable();

                    if (dtCode.Rows[1]["CodeValue1"].ToString() == "Y")
                    {
                        if (Convert.ToBoolean(Session["PreApp"]) == true)
                            amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                        else
                            amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                    }
                    else
                    {
                        if (Convert.ToBoolean(Session["PreApp"]) == true)
                            amnt = ut.NullSafeDouble(txtEditPreAmnt.Text);
                        else
                            amnt = ut.NullSafeDouble(txtEditActAmnt.Text);
                    }
                }

                ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();
                expensedetails.reqId = reqId;
                expensedetails.expLineNo = Convert.ToInt32(seqId);
                expensedetails.expItem = ddlEditExpenseItem.SelectedItem.Text;
                expensedetails.expDate = txtEditExpDate.Text;
                if (ddlEditCity.SelectedItem.Text == "Other")
                    expensedetails.citiesVstd = txtEditOtherCity.Text;
                else
                    expensedetails.citiesVstd = ddlEditCity.SelectedItem.Text;
                expensedetails.comments = txtEditComments.Text;
                expensedetails.orgId = Convert.ToInt32(hdnSelectedOrgid.Value);
                expensedetails.expType = ddlEditExpType.SelectedValue;
                expensedetails.jobCode = ddlEditJobs.SelectedValue;
                expensedetails.phaseCode = ddlEditPhases.SelectedValue;
                expensedetails.JCatCode = ddlEditCategories.SelectedValue;
                expensedetails.compCode = hdnCompCode.Value.ToString();

                if (ddlEditExpType.SelectedItem.Text == "GENERAL")
                {
                    expensedetails.jobCode = string.Empty;
                    expensedetails.phaseCode = string.Empty;
                    expensedetails.JCatCode = string.Empty;
                }
                else
                {
                    expensedetails.jobCode = ddlEditJobs.SelectedValue;
                    expensedetails.phaseCode = ddlEditPhases.SelectedValue;
                    expensedetails.JCatCode = ddlEditCategories.SelectedValue;
                }
                //xms.updateExp_Temp(expensedetails);

                int index = Convert.ToInt32(Session["rowIndexVal"].ToString());
                if (ddlEditExpType.SelectedItem.Text == "GENERAL")
                {
                    dt.Rows[index]["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text;
                    dt.Rows[index]["JOB_CODE"] = string.Empty;
                    dt.Rows[index]["JPHS_CODE"] = string.Empty;
                    dt.Rows[index]["JCAT_CODE"] = string.Empty;
                    dt.Rows[index]["CodeID_ET"] = ddlEditExpType.SelectedValue;
                    dt.Rows[index]["Code_Job"] = string.Empty;
                    dt.Rows[index]["Code_Phs"] = string.Empty;
                    dt.Rows[index]["Code_JC"] = string.Empty;
                    dt.Rows[index]["CodeID"] = ddlEditExpenseItem.SelectedValue;
                    dt.Rows[index]["ExpenseItem"] = ddlEditExpenseItem.SelectedItem.Text;
                    dt.Rows[index]["ExpenseDate"] = txtEditExpDate.Text;
                    dt.Rows[index]["otherPlace"] = txtEditLocalLocation.Text;
                    dt.Rows[index]["companyCar"] = dvEditCompCar.Visible == true ? ddlCompCar.SelectedValue : string.Empty;
                    dt.Rows[index]["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";
                    if (dvEditCV.Visible == true)
                    {
                        if (ddlEditCity.SelectedValue == "0")
                            dt.Rows[index]["CitiesVisited"] = string.Empty;
                        else if (ddlEditCity.SelectedItem.Text == "Other")
                        {
                            dvEditOtherCity.Style["display"] = "block";
                            dt.Rows[index]["OtherCities"] = txtEditOtherCity.Text;
                            dt.Rows[index]["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                        }
                        else
                            dt.Rows[index]["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                    }
                    else
                    {
                        dt.Rows[index]["OtherCities"] = txtEditOtherFromCity.Text;
                        dt.Rows[index]["CitiesVisited"] = ddlEditFromcity.SelectedItem.Text;
                    }
                    dt.Rows[index]["PreAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == false ? 0 : amnt;
                    dt.Rows[index]["ActualAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == true ? 0 : amnt;
                    dt.Rows[index]["Comments"] = txtEditComments.Text;
                    dt.Rows[index]["StateID"] = ddlEditCity.SelectedValue;
                    dt.Rows[index]["PaymentID"] = ddlEditPaymentType.SelectedValue;
                    if (ddlEditPaymentType.SelectedValue == "0")
                        dt.Rows[index]["PaymentType"] = string.Empty;
                    else
                        dt.Rows[index]["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;
                    if (dvEditVendor.Visible == true)
                    {
                        if (ddlEditPreVendor.SelectedValue == "0")
                            dt.Rows[index]["PreferredVendor"] = string.Empty;
                        else
                            dt.Rows[index]["PreferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                    }
                    else
                        dt.Rows[index]["PreferredVendor"] = string.Empty;

                    if (dvEditAgName.Visible == true)
                    {
                        if (ddlEditAgName.SelectedValue == "0")
                            dt.Rows[index]["AgentName"] = string.Empty;
                        else
                            dt.Rows[index]["AgentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                    }
                    else
                        dt.Rows[index]["AgentName"] = string.Empty;
                    dt.Rows[index]["ItinararyNo"] = txtEditItNo.Text;
                    dt.Rows[index]["FromDate"] = txtEditFromdate.Text;
                    dt.Rows[index]["ToDate"] = txtEditTodate.Text;
                    if (dvEditFromcity.Visible == true)
                    {
                        if (ddlEditFromcity.SelectedValue == "0")
                            dt.Rows[index]["FromCity"] = string.Empty;
                        else
                            dt.Rows[index]["FromCity"] = ddlEditFromcity.SelectedItem.Text;
                        if (ddlEditFromcity.SelectedItem.Text == "Other")
                            dt.Rows[index]["FromOtherCity"] = txtEditOtherFromCity.Text;
                        else
                            dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["FromCity"] = string.Empty;
                        dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    if (dvEditToCity.Visible == true)
                    {
                        if (ddlEditTocity.SelectedValue == "0")
                            dt.Rows[index]["toCity"] = string.Empty;
                        else
                            dt.Rows[index]["toCity"] = ddlEditTocity.SelectedItem.Text;
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                            dt.Rows[index]["ToOtherCity"] = txtEditOtherToCity.Text;
                        else
                            dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["toCity"] = string.Empty;
                        dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    dt.Rows[index]["TotalTrip"] = ut.NullSafeDouble(txtEditTotTrip.Text);
                    dt.Rows[index]["LessNorm"] = ut.NullSafeDouble(txtEditLNorm.Text);
                    dt.Rows[index]["Reimbt"] = ut.NullSafeDouble(txtEditReimbt.Text);
                    dt.Rows[index]["AccountCode"] = hdnAcc.Value;
                }
                else
                {
                    dt.Rows[index]["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text;
                    dt.Rows[index]["JOB_CODE"] = ddlEditJobs.SelectedItem.Text;
                    dt.Rows[index]["JPHS_CODE"] = ddlEditPhases.SelectedItem.Text;
                    dt.Rows[index]["JCAT_CODE"] = ddlEditCategories.SelectedItem.Text;
                    dt.Rows[index]["CodeID_ET"] = ddlEditExpType.SelectedValue;
                    dt.Rows[index]["Code_Job"] = ddlEditJobs.SelectedValue;
                    dt.Rows[index]["Code_Phs"] = ddlEditPhases.SelectedValue;
                    dt.Rows[index]["Code_JC"] = ddlEditCategories.SelectedValue;
                    dt.Rows[index]["CodeID"] = ddlEditExpenseItem.SelectedValue;
                    dt.Rows[index]["ExpenseItem"] = ddlEditExpenseItem.SelectedItem.Text;
                    dt.Rows[index]["ExpenseDate"] = txtEditExpDate.Text;
                    dt.Rows[index]["otherPlace"] = txtEditLocalLocation.Text;
                    dt.Rows[index]["companyCar"] = dvEditCompCar.Visible == true ? ddlCompCar.SelectedValue : string.Empty;
                    dt.Rows[index]["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";
                    if (dvEditCV.Visible == true)
                    {
                        if (ddlEditCity.SelectedValue == "0")
                            dt.Rows[index]["CitiesVisited"] = string.Empty;
                        else if (ddlEditCity.SelectedItem.Text == "Other")
                        {
                            dvEditOtherCity.Style["display"] = "block";
                            dt.Rows[index]["OtherCities"] = txtEditOtherCity.Text;
                            dt.Rows[index]["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                        }
                        else
                            dt.Rows[index]["CitiesVisited"] = ddlEditCity.SelectedItem.Text;
                    }
                    else
                    {
                        dt.Rows[index]["OtherCities"] = txtEditOtherFromCity.Text;
                        dt.Rows[index]["CitiesVisited"] = ddlEditFromcity.SelectedItem.Text;
                    }
                    dt.Rows[index]["PreAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == false ? 0 : amnt;
                    dt.Rows[index]["ActualAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == true ? 0 : amnt;
                    dt.Rows[index]["Comments"] = txtEditComments.Text;
                    dt.Rows[index]["StateID"] = ddlEditCity.SelectedValue;
                    dt.Rows[index]["PaymentID"] = ddlEditPaymentType.SelectedValue;
                    if (ddlEditPaymentType.SelectedValue == "0")
                        dt.Rows[index]["PaymentType"] = string.Empty;
                    else
                        dt.Rows[index]["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;
                    if (dvEditVendor.Visible == true)
                    {
                        if (ddlEditPreVendor.SelectedValue == "0")
                            dt.Rows[index]["PreferredVendor"] = string.Empty;
                        else
                            dt.Rows[index]["PreferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                    }
                    else
                        dt.Rows[index]["PreferredVendor"] = string.Empty;
                    if (dvEditAgName.Visible == true)
                    {
                        if (ddlEditAgName.SelectedValue == "0")
                            dt.Rows[index]["AgentName"] = string.Empty;
                        else
                            dt.Rows[index]["AgentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                    }
                    else
                        dt.Rows[index]["AgentName"] = string.Empty;

                    dt.Rows[index]["ItinararyNo"] = txtEditItNo.Text;
                    dt.Rows[index]["FromDate"] = txtEditFromdate.Text;
                    dt.Rows[index]["ToDate"] = txtEditTodate.Text;
                    if (dvEditFromcity.Visible == true)
                    {
                        if (ddlEditFromcity.SelectedValue == "0")
                            dt.Rows[index]["FromCity"] = string.Empty;
                        else
                            dt.Rows[index]["FromCity"] = ddlEditFromcity.SelectedItem.Text;
                        if (ddlEditFromcity.SelectedItem.Text == "Other")
                            dt.Rows[index]["FromOtherCity"] = txtEditOtherFromCity.Text;
                        else
                            dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["FromCity"] = string.Empty;
                        dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    if (dvEditToCity.Visible == true)
                    {
                        if (ddlEditTocity.SelectedValue == "0")
                            dt.Rows[index]["toCity"] = string.Empty;
                        else
                            dt.Rows[index]["toCity"] = ddlEditTocity.SelectedItem.Text;
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                            dt.Rows[index]["ToOtherCity"] = txtEditOtherToCity.Text;
                        else
                            dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["toCity"] = string.Empty;
                        dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    dt.Rows[index]["FromOtherCity"] = txtEditOtherFromCity.Text;
                    dt.Rows[index]["ToOtherCity"] = txtEditOtherToCity.Text;
                    dt.Rows[index]["TotalTrip"] = ut.NullSafeDouble(txtEditTotTrip.Text);
                    dt.Rows[index]["LessNorm"] = ut.NullSafeDouble(txtEditLNorm.Text);
                    dt.Rows[index]["Reimbt"] = ut.NullSafeDouble(txtEditReimbt.Text);
                    dt.Rows[index]["AccountCode"] = hdnAcc.Value;
                }
                dt.AcceptChanges();
                Session["dt"] = dt;
                gvShowExpItems.DataSource = dt;
                gvShowExpItems.DataBind();
                //Session.Remove("dtSelDfts");
            }
            else
            {
                dvError.Style["color"] = "Red";
                dvError.InnerHtml = "No changes to update!";
            }
        }
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        int reqId = Convert.ToInt32(lblReqId.Text);
        dt = (DataTable)Session["dt"];
        int mFlag = 0;
        string appString = "###";

        for (int i = 0; i < dt.Rows.Count; i++)
        {
            req += reqId + appString;
            expItem += dt.Rows[i]["ExpenseItem"].ToString() + appString;
            expLineNo += Convert.ToInt32(dt.Rows[i]["expLineNo"]).ToString() + appString;
            expDate += (dt.Rows[i]["ExpenseDate"].ToString() == string.Empty ? " " : dt.Rows[i]["ExpenseDate"].ToString()) + appString;
            citiesVstd += dt.Rows[i]["CitiesVisited"].ToString() + appString;
            comments += dt.Rows[i]["Comments"].ToString() + appString;
            orgId1 += hdnSelectedOrgid.Value + appString;
            expenseType += dt.Rows[i]["EXP_TYPE"].ToString() + appString;
            jobCode += (dt.Rows[i]["JOB_CODE"].ToString() == string.Empty ? " " : dt.Rows[i]["JOB_CODE"].ToString()) + appString;
            phaseCode += (dt.Rows[i]["JPHS_CODE"].ToString() == string.Empty ? " " : dt.Rows[i]["JPHS_CODE"].ToString()) + appString;
            JCatCode += (dt.Rows[i]["JCAT_CODE"].ToString() == string.Empty ? " " : dt.Rows[i]["JCAT_CODE"].ToString()) + appString;
            compCode += hdnCompCode.Value + appString;
            purpose += txtPurpose.Text + appString;
            preAmount += ut.NullSafeDouble(0) + appString;
            currency += hdnCurrency.Value + appString;
            sts += "Saved" + appString;
            stsId += 3 + appString;
            managerId += Convert.ToInt32(hdnManagerId.Value) + appString;
            startDate += txtTripStartDate.Text + appString;
            payMode += dt.Rows[i]["PaymentType"].ToString() + appString;
            preApproved += "0" + appString;
            actualAmount += ut.NullSafeDouble(dt.Rows[i]["ActualAmount"].ToString()) + appString;
            othercity += " " + appString;
            detailsFlag += 1 + appString;
            if (mFlag == 0)
            {
                masterFlag += 1 + appString;
                mFlag = 1;
            }
            else
                masterFlag += 0 + appString;
            accCode += dt.Rows[i]["AccountCode"].ToString() + appString;
            autoFlag += hdnDraftId.Value + appString;
            agentName += (dt.Rows[i]["AgentName"].ToString() == string.Empty ? " " : dt.Rows[i]["AgentName"].ToString()) + appString;
            bookedDate += " " + appString;
            fromCity += (dt.Rows[i]["FromCity"].ToString() == string.Empty ? " " : dt.Rows[i]["FromCity"].ToString()) + appString;
            otherFromCity += (dt.Rows[i]["FromOtherCity"].ToString() == string.Empty ? " " : dt.Rows[i]["FromOtherCity"].ToString()) + appString;
            toCity += (dt.Rows[i]["toCity"].ToString() == string.Empty ? " " : dt.Rows[i]["toCity"].ToString()) + appString;
            otherToCity += (dt.Rows[i]["ToOtherCity"].ToString() == string.Empty ? " " : dt.Rows[i]["ToOtherCity"].ToString()) + appString;
            preferredVendor += (dt.Rows[i]["PreferredVendor"].ToString() == string.Empty ? " " : dt.Rows[i]["PreferredVendor"].ToString()) + appString;
            itinararyNo += (dt.Rows[i]["ItinararyNo"].ToString() == string.Empty ? " " : dt.Rows[i]["ItinararyNo"].ToString()) + appString;
            fromDate += (dt.Rows[i]["FromDate"].ToString() == string.Empty ? " " : dt.Rows[i]["FromDate"].ToString()) + appString;
            toDate += (dt.Rows[i]["ToDate"].ToString() == string.Empty ? " " : dt.Rows[i]["ToDate"].ToString()) + appString;
            lessNorm += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[i]["LessNorm"].ToString())) + appString;
            totalTrip += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[i]["TotalTrip"].ToString())) + appString;
            reimbursement += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[i]["Reimbt"].ToString())) + appString;
            companyCar += (dt.Rows[i]["companyCar"].ToString() == string.Empty ? " " : dt.Rows[i]["companyCar"].ToString()) + appString;
            otherPlace += (dt.Rows[i]["otherPlace"].ToString() == string.Empty ? " " : dt.Rows[i]["otherPlace"].ToString()) + appString;
            outOfCity += (dt.Rows[i]["outOfCity"].ToString() == string.Empty ? " " : dt.Rows[i]["outOfCity"].ToString()) + appString;
            quantity += 0 + appString;
            unitPrice += 0 + appString;
            pckUnit += " " + appString;
            shipCost += 0 + appString;
            balAfterPO += 0 + appString;
            taxAmount1 += 0 + appString;
            taxAmount2 += 0 + appString;
            taxAmount3 += 0 + appString;
            reimburse += " " + appString;
            taxCalCulated += 0 + appString;
            vendPartNo += " " + appString;
            poLineSeq += "0" + appString;
            userId += hdnSelectedUserID.Value + appString;
            csUserId += Session["UserID"].ToString() + appString;
        }

        AddExpensesVO expensedetails = new AddExpensesVO();
        expensedetails.reqId = req.Substring(0, req.Length - 3);
        expensedetails.expItem = expItem.Substring(0, expItem.Length - 3);
        expensedetails.expLineNo = expLineNo.Substring(0, expLineNo.Length - 3);
        expensedetails.expDate = expDate.Substring(0, expDate.Length - 3);
        expensedetails.citiesVstd = citiesVstd.Substring(0, citiesVstd.Length - 3);
        expensedetails.comments = comments.Substring(0, comments.Length - 3);
        expensedetails.orgId = orgId1.Substring(0, orgId1.Length - 3);
        expensedetails.expType = expenseType.Substring(0, expenseType.Length - 3);
        expensedetails.jobCode = jobCode.Substring(0, jobCode.Length - 3);
        expensedetails.phaseCode = phaseCode.Substring(0, phaseCode.Length - 3);
        expensedetails.JCatCode = JCatCode.Substring(0, JCatCode.Length - 3);
        expensedetails.compCode = compCode.Substring(0, compCode.Length - 3);
        expensedetails.purpose = purpose.Substring(0, purpose.Length - 3);
        expensedetails.preAmount = preAmount.Substring(0, preAmount.Length - 3);
        expensedetails.currency = currency.Substring(0, currency.Length - 3);
        expensedetails.status = sts.Substring(0, sts.Length - 3);
        expensedetails.statusId = stsId.Substring(0, stsId.Length - 3);
        expensedetails.managerId = managerId.Substring(0, managerId.Length - 3);
        expensedetails.startDate = startDate.Substring(0, startDate.Length - 3);
        expensedetails.payMode = payMode.Substring(0, payMode.Length - 3);
        expensedetails.preApproved = preApproved.Substring(0, preApproved.Length - 3);
        expensedetails.actualAmount = actualAmount.Substring(0, actualAmount.Length - 3);
        expensedetails.othercity = othercity.Substring(0, othercity.Length - 3);
        expensedetails.masterFlag = masterFlag.Substring(0, masterFlag.Length - 3);
        expensedetails.detailsFlag = detailsFlag.Substring(0, detailsFlag.Length - 3);
        expensedetails.automileageFlag = autoFlag.Substring(0, autoFlag.Length - 3);
        expensedetails.fromCity = fromCity.Substring(0, fromCity.Length - 3);
        expensedetails.toCity = toCity.Substring(0, toCity.Length - 3);
        expensedetails.preferredVendor = preferredVendor.Substring(0, preferredVendor.Length - 3);
        expensedetails.agentName = agentName.Substring(0, agentName.Length - 3);
        expensedetails.itinararyNo = itinararyNo.Substring(0, itinararyNo.Length - 3);
        expensedetails.bookedDate = bookedDate.Substring(0, bookedDate.Length - 3);
        expensedetails.fromDate = fromDate.Substring(0, fromDate.Length - 3);
        expensedetails.toDate = toDate.Substring(0, toDate.Length - 3);
        expensedetails.accountCode = accCode.Substring(0, accCode.Length - 3);
        expensedetails.reimbt = reimbursement.Substring(0, reimbursement.Length - 3);
        expensedetails.LNorm = lessNorm.Substring(0, lessNorm.Length - 3);
        expensedetails.totTrip = totalTrip.Substring(0, totalTrip.Length - 3);
        expensedetails.otherFromCity = otherFromCity.Substring(0, otherFromCity.Length - 3);
        expensedetails.otherToCity = otherToCity.Substring(0, otherToCity.Length - 3);
        expensedetails.userId = userId.Substring(0, userId.Length - 3);
        expensedetails.companyCar = companyCar.Substring(0, companyCar.Length - 3);
        expensedetails.otherPlace = otherPlace.Substring(0, otherPlace.Length - 3);
        expensedetails.outOfCity = outOfCity.Substring(0, outOfCity.Length - 3);
        expensedetails.quantity = quantity.Substring(0, quantity.Length - 3);
        expensedetails.unitPrice = unitPrice.Substring(0, unitPrice.Length - 3);
        expensedetails.packageUnit = pckUnit.Substring(0, pckUnit.Length - 3);
        expensedetails.shippingCost = shipCost.Substring(0, shipCost.Length - 3);
        expensedetails.balAfterPO = balAfterPO.Substring(0, balAfterPO.Length - 3);
        expensedetails.taxAmount1 = taxAmount1.Substring(0, taxAmount1.Length - 3);
        expensedetails.taxAmount2 = taxAmount2.Substring(0, taxAmount2.Length - 3);
        expensedetails.taxAmount3 = taxAmount3.Substring(0, taxAmount3.Length - 3);
        expensedetails.reimbursable = reimburse.Substring(0, reimburse.Length - 3);
        expensedetails.taxCalculated = taxCalCulated.Substring(0, taxCalCulated.Length - 3);
        expensedetails.vendPartno = vendPartNo.Substring(0, vendPartNo.Length - 3);
        expensedetails.polineseq = poLineSeq.Substring(0, poLineSeq.Length - 3);
        expensedetails.csuserid = csUserId.Substring(0, csUserId.Length - 3);
        expensedetails.lastUpdSource = "Web";

        string test = xms.addExpense1(expensedetails);

        Session.Remove("dt");
        Session.Remove("ReqID");
        btnSave.Visible = false;
        tdLineItems.Visible = false;
        txtPurpose.Text = string.Empty;
        txtTripStartDate.Text = string.Empty;

        btnDelete.Visible = false;
        ClearFields();
        BlockFields();
        tdReceipts.Visible = false;
        btnAppend.Visible = false;
        Session["LineNO"] = 0;
        AddLineNo();

        string strReq = xms.getCodes(Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value, "SEQ");
        List<CodeValueVO> lstReq = ser.Deserialize<List<CodeValueVO>>(strReq);
        DataSet dsReq = new DataSet();
        dsReq.Tables.Add(Utility.ConvertToDataTable(lstReq));
        lblReqId.Text = dsReq.Tables[0].Rows[0]["CodeValue1"].ToString();

        GridView gvOrders;
        foreach (GridViewRow gvr in gvCustomers.Rows)
        {
            if (gvr.RowType == DataControlRowType.DataRow)
            {
                gvOrders = (GridView)gvr.FindControl("gvOrders");
                BindOrders(gvOrders, Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value);

                GridView gvProducts;
                foreach (GridViewRow gvr1 in gvOrders.Rows)
                {
                    if (gvr1.RowType == DataControlRowType.DataRow)
                    {
                        gvProducts = (GridView)gvr1.FindControl("gvProducts");
                        BindProducts(gvProducts, Convert.ToInt32(hdnSelectedOrgid.Value), hdnCompCode.Value, Convert.ToInt32(hdnSelectedUserID.Value));
                        break; // Once we've found it, no need to iterate through other items
                    }
                }
                break; // Once we've found it, no need to iterate through other items
            }
        }
    }

    protected void DeleteExpItem(object sender, EventArgs e)
    {
        int index = Convert.ToInt32(Session["rowIndexVal"].ToString());
        dt = (DataTable)Session["dt"];
        dt.Rows[index].Delete();
        dt.AcceptChanges();
        Session["dt"] = dt;

        gvShowExpItems.DataSource = dt;
        gvShowExpItems.DataBind();

        ClearFields();
        BlockFields();
        AddLineNo();
        btnDelete.Visible = false;

        if (gvShowExpItems.Rows.Count == 0)
        {
            btnSave.Visible = false;
            tdLineItems.Visible = false;
        }
        else
        {
            btnSave.Visible = true;
            tdLineItems.Visible = true;
        }
    }

    void AddLineNo()
    {
        int lno = Convert.ToInt32(Session["LineNO"]) + 1;
        lblLineNO.Text = lno.ToString();
        Session["LineNO"] = lno.ToString();
    }

    void ValidateMaxApprLimit()
    {
        double totActAmnt = 0;
        dt = (DataTable)Session["dt"];
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            totActAmnt += ut.NullSafeDouble(dt.Rows[i]["ActualAmount"].ToString());
        }
        hdnTotalActAmnt.Value = totActAmnt.ToString();
        hdnCurrExpAmnt.Value = ut.NullSafeDouble(txtEditActAmnt.Text).ToString();
    }
}