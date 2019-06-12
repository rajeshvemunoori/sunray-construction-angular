using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using System.Configuration;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Drawing;
using Image = System.Drawing.Image;

public partial class MyAccount : System.Web.UI.Page
{
    #region private variables

    int ret = 0;
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    public char currencySymbol;
    bool _refreshExp = false;
    #endregion

    #region User Details

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvError');");
            btnSave.Attributes.Add("onclick", "javascript:return validateMyAccount();");
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            else
            {
                if (Session["PwdUpdated"].ToString().ToLower() == "true")
                {
                    if (!IsPostBack)
                    {
                        LoadUserDetails();
                        Session.Remove("SignFileName");
                        btnClearImg.Visible = false;
                    }
                }
                else
                    Response.Redirect("EditPassword.aspx");
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void LoadUserDetails()
    {
        BindRegions();
        DataSet ds = new DataSet();
        var AccntDetails = xms.getUserDetailsForMyAcc(ut.NullSafeInteger(Session["UserID"]));
        List<UserVO> users = ser.Deserialize<List<UserVO>>(AccntDetails);
        //UserVO u = new UserVO();
        //u.userGroup
        ds.Tables.Add(Utility.ConvertToDataTable(users));
        txtFirstName.Text = ds.Tables[0].Rows[0]["FName"].ToString();
        txtLastName.Text = ds.Tables[0].Rows[0]["LName"].ToString();
        txtEmail.Text = ds.Tables[0].Rows[0]["Email"].ToString();
        txtPhone.Text = ds.Tables[0].Rows[0]["Phone"].ToString();
        txtDesignation.Text = ds.Tables[0].Rows[0]["Designation"].ToString();
        txtManager.Text = ds.Tables[0].Rows[0]["ManagerEmail"].ToString();
        txtCashAdv.Text = ds.Tables[0].Rows[0]["cashAdv"].ToString();
        txtDept.Text = ds.Tables[0].Rows[0]["departmentCode"].ToString();
        //ddlRegion.SelectedValue = ds.Tables[0].Rows[0]["regionCode"].ToString();
        //GetCitiesByRegion();
        txtCity.Text = ds.Tables[0].Rows[0]["city"].ToString();
        txtUserGrp.Text = ds.Tables[0].Rows[0]["userGroup"].ToString();

        hdnSignFileName.Value = ds.Tables[0].Rows[0]["signatureText"].ToString();
        hdnSignFileNameOriginal.Value = ds.Tables[0].Rows[0]["origPath"].ToString();
        //UserVO u = new UserVO();
        //u.signatureText
        //Get currency symbol
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv1 = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv1.ToTable().Rows[0]["CodeValue1"]);

        //Display signature if already saved
        GetSignature(ds.Tables[0].Rows[0]["signatureText"].ToString(), ds.Tables[0].Rows[0]["origPath"].ToString());

        Session["AccDetails"] = ds;
    }

    private void BindRegions()
    {
        string str = xms.getRegions();
        List<RegionVO> lst = ser.Deserialize<List<RegionVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = dt.DefaultView;
        dv.Sort = "State ASC";
        ddlRegion.DataSource = dv;
        ddlRegion.DataTextField = "state";
        ddlRegion.DataValueField = "regionCode";
        ddlRegion.DataBind();
        ddlRegion.Items.Insert(0, "Please Select");
        ddlRegion.Items.FindByText("Please Select").Value = "0";
    }

    protected void ddlRgnCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        GetCitiesByRegion();
        txtCity.Text = string.Empty;
        txtCity.Focus();
    }

    private void GetCitiesByRegion()
    {
        string str = xms.getCities(ddlRegion.SelectedValue);
        List<CityVO> lst = ser.Deserialize<List<CityVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        dt.Columns.Add("CityZip");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["CityZip"] = dt.Rows[i]["City"].ToString() + "-" + dt.Rows[i]["ZipCode"].ToString();

        dt.AcceptChanges();
        DataView dv = dt.DefaultView;
        dv.Sort = "City ASC";
        Session["CitiesByRegion"] = dv.ToTable();
    }

    private void GetSignature(string path, string orgPath)
    {
        string base64String = string.Empty;
        if (!string.IsNullOrEmpty(path))
        {
            //byte[] signBytes = new byte[0];
            byte[] signBytes = xms.getExpDraftsById(path, 1);
            //Image img = byteArrayToImage(signBytes);
            //base64String = imageTobase64String(img);
            imgCropped.Src = "data:image/jpeg;base64," + Convert.ToBase64String(signBytes);

            //Get original document containing signature
            Encryption enc = new Encryption();
            string key = enc.GenerateAPassKey("POExistAtt");
            string filepath = enc.Encrypt(orgPath, key);
            string fileName = enc.Encrypt(orgPath, key);
            lblOrglDownload.Visible = true;
            lblOrglDownload.Text = "<a href='downloadFile.aspx?typ=5&aid=" + filepath + "&ext=" + fileName + "'>Download Original</a>";
            //Get original document containing signature
        }
        else
            lblOrglDownload.Visible = false;
    }

    private Image byteArrayToImage(byte[] byteArrayIn)
    {
        MemoryStream ms = new MemoryStream(byteArrayIn);
        Image returnImage = Image.FromStream(ms);
        return returnImage;
    }

    private string imageTobase64String(Image img)
    {
        using (Image image = img)
        {
            using (MemoryStream m = new MemoryStream())
            {
                image.Save(m, image.RawFormat);
                byte[] imageBytes = m.ToArray();

                // Convert byte[] to Base64 String
                string base64String = Convert.ToBase64String(imageBytes);
                return base64String;
            }
        }
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        //split city and zipcode
        string city = string.Empty;
        if (!string.IsNullOrEmpty(txtCity.Text))
        {
            if (txtCity.Text.Contains('-'))
            {
                string[] arrCity = txtCity.Text.Split('-');
                city = arrCity[0];
            }
            else
                city = txtCity.Text;
        }
        //split city and zipcode

        UserVO accDetails = new UserVO();
        accDetails.fName = txtFirstName.Text;
        accDetails.lName = txtLastName.Text;
        accDetails.phone = txtPhone.Text;
        accDetails.designation = txtDesignation.Text;
        accDetails.userId = ut.NullSafeInteger(Session["UserID"]);
        accDetails.email = txtEmail.Text;
        accDetails.digitalFlag = 0;
        accDetails.signatureText = string.Empty;
        accDetails.regionCode = ddlRegion.SelectedValue;
        accDetails.city = city;
        if (Session["SignFileName"] != null)
        {
            accDetails.signArray = (byte[])Session["SignBytes"];
            accDetails.signPath = Session["SignFileName"].ToString();
            accDetails.orgSignArray = (byte[])Session["SignBytesOriginal"];
            accDetails.origPath = Session["SignFileNameOriginal"].ToString();
        }
        else
        {
            accDetails.signArray = null;
            accDetails.signPath = hdnSignFileName.Value == string.Empty ? string.Empty : (txtFirstName.Text + txtLastName.Text + "_" + Session["UserID"].ToString());
            accDetails.orgSignArray = null;
            accDetails.origPath = hdnSignFileNameOriginal.Value == string.Empty ? string.Empty : (txtFirstName.Text + txtLastName.Text + "_" + Session["UserID"].ToString() + "_Original");
        }
        ret = xms.updateUserDetailsForMyAcc(accDetails);

        if (ret > 0)
        {
            dvError.Visible = true;
            dvError.Style["color"] = "Green";
            dvError.InnerHtml = "Details updated Successfully!";
            Session["username"] = txtFirstName.Text;
            Session["lastname"] = txtLastName.Text;
            ClearImage(1);
            Session.Remove("SignFileName");
            Session.Remove("SignBytes");
        }
        else
            dvError.InnerHtml = "Can not update your details. Please contact your Administrator.";
    }

    protected void chkDgtSign_CheckedChanged(object sender, EventArgs e)
    {
        //if (chkDgtSign.Checked)
        //{
        //    string name = txtFirstName.Text + txtLastName.Text;
        //    lblSignature.Style["font-family"] = "Edwardian Script ITC";
        //    lblSignature.Style["font-size"] = "24px";
        //    lblSignature.Text = name;
        //    dvSign.Style["display"] = "block";
        //}
        //else
        //{
        //    lblSignature.Text = string.Empty;
        //    dvSign.Style["display"] = "none";
        //}
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        Session.Remove("SignFileName");
        string ext = Path.GetExtension(fupdInv.PostedFile.FileName);
        Session["OrgFileName"] = fupdInv.FileName;
        if (ext.ToLower() == ".png" || ext.ToLower() == ".jpg" || ext.ToLower() == ".jpeg")
        {
            dvError.InnerHtml = string.Empty;
            string fileName = txtFirstName.Text + txtLastName.Text + "_" + Session["UserID"].ToString();
            string fileSavePath = Server.MapPath("ERTemp") + "\\" + fileName + ext;
            Session["SignFileName"] = fileName;
            Session["SignFileExt"] = ext;
            fupdInv.SaveAs(fileSavePath);
        }
        else
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of type .png/.jpg/.jpeg');", true);
    }

    protected void lnkLoad_Click(object sender, EventArgs e)
    {
        lnkLoad.Text = Session["OrgFileName"].ToString();
        dvError.InnerHtml = string.Empty;
        if (!(Session["SignFileName"] == null))
        {
            if (!string.IsNullOrEmpty(Session["SignFileName"].ToString()))
            {
                imgFull.Src = imgCropped.Src = string.Empty;
                imgFull.Src = "ERTemp/" + Session["SignFileName"].ToString() + Session["SignFileExt"].ToString();
                btnClearImg.Visible = true;
                dvCropErr.InnerHtml = hdnx.Value = hdny.Value = hdnw.Value = hdnh.Value = string.Empty;
                popCropImg.Show();
            }
            else
                dvError.InnerHtml = "File upload error. Please try again.";
        }
        else
            dvError.InnerHtml = "File upload error. Please try again.";
    }

    protected void btncrop_Click(object sender, EventArgs e)
    {
        try
        {
            string fname = Session["SignFileName"].ToString() + Session["SignFileExt"].ToString();
            string fpath = Path.Combine(Server.MapPath("ERTemp"), fname);
            Image oimg = Image.FromFile(fpath);
            Rectangle cropcords = new Rectangle(
            Convert.ToInt32(hdnx.Value),
            Convert.ToInt32(hdny.Value),
            Convert.ToInt32(hdnw.Value),
            Convert.ToInt32(hdnh.Value));
            string cfname, cfpath;
            Bitmap bitMap = new Bitmap(cropcords.Width, cropcords.Height, oimg.PixelFormat);
            Graphics grph = Graphics.FromImage(bitMap);
            grph.DrawImage(oimg, new Rectangle(0, 0, bitMap.Width, bitMap.Height), cropcords, GraphicsUnit.Pixel);
            cfname = "cropped_" + fname;
            cfpath = Path.Combine(Server.MapPath("ERTemp"), cfname);
            //bitMap.Save(cfpath);

            //Hold original signature image
            HoldOrginalSignature(oimg);
            //Hold original signature image

            //Resize cropped image to 200x50
            Image myImage = (Image)bitMap;
            //Image cfImage = Image.FromFile(Path.Combine(Server.MapPath("ERTemp"), cfname));
            Bitmap bitMapResized = ScaleImage(myImage);
            bitMapResized.Save(Path.Combine(Server.MapPath("ERTemp"), cfname));
            //Resize cropped image to 200x50

            imgCropped.Visible = true;
            imgCropped.Src = "ERTemp/" + cfname;

            //convert image to byte array
            //byte[] bytes = File.ReadAllBytes(cfpath);
            Image imgResized = (Image)bitMapResized;
            byte[] bytes = ImageToByte2(imgResized);
            //convert image to byte array

            Session["SignBytes"] = bytes;
            popCropImg.Hide();
        }
        catch (Exception ex)
        {
            dvCropErr.InnerHtml = "Please select region on the image before cropping.";
            //dvCropErr.InnerHtml = ex.Message;
            popCropImg.Show();
        }
    }

    private void HoldOrginalSignature(Image img)
    {
        Session["SignBytesOriginal"] = ImageToByte2(img);
        Session["SignFileNameOriginal"] = Session["SignFileName"].ToString() + "_Original";
    }

    protected void btnClearImg_Click(object sender, EventArgs e)
    {
        ClearImage(0);
    }

    private void ClearImage(int type)
    {
        try
        {
            imgFull.Src = string.Empty;
            btnClearImg.Visible = false;
            lnkLoad.Text = string.Empty;
            Session.Remove("SignFileName");
            File.Delete(Server.MapPath("ERTemp") + "\\" + Session["SignFileName"].ToString());
            File.Delete(Server.MapPath("ERTemp") + "\\cropped_" + Session["SignFileName"].ToString());
            if (type == 0)
                imgCropped.Src = string.Empty;
        }
        catch
        { }
    }

    private Bitmap ScaleImage(Image oldImage)
    {
        //double resizeFactor = 1;

        //if (oldImage.Width > 200 || oldImage.Height > 50)
        //{
        //    double widthFactor = Convert.ToDouble(oldImage.Width) / 200;
        //    double heightFactor = Convert.ToDouble(oldImage.Height) / 50;
        //    resizeFactor = Math.Max(widthFactor, heightFactor);
        //}
        //int width = Convert.ToInt32(oldImage.Width / resizeFactor);
        //int height = Convert.ToInt32(oldImage.Height / resizeFactor);
        int width = 150;
        int height = 50;
        Bitmap newImage = new Bitmap(width, height);
        Graphics g = Graphics.FromImage(newImage);
        g.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
        g.DrawImage(oldImage, 0, 0, newImage.Width, newImage.Height);
        return newImage;
    }

    public static byte[] ImageToByte2(Image img)
    {
        byte[] byteArray = new byte[0];
        using (MemoryStream stream = new MemoryStream())
        {
            img.Save(stream, System.Drawing.Imaging.ImageFormat.Jpeg);
            stream.Close();
            byteArray = stream.ToArray();
        }
        return byteArray;
    }

    protected void Reload(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        imgCropped.Src = string.Empty;
        LoadUserDetails();
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

    #endregion

    #region CashAdvance History

    protected void DisplayCashAdvHistory(object sender, EventArgs e)
    {
        Session.Remove("dtCAHist");
        BindCAHistGrid();
        popCAHist.Show();
    }

    protected void SortExpression_CAHist(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_CAHist"] = lnk.ID;

        if (Session["SortDir_CAHist"] == null || Session["SortDir_CAHist"].ToString() == "Asc")
            Session["SortDir_CAHist"] = "Desc";
        else
            Session["SortDir_CAHist"] = "Asc";
        Session["SortExpr_CAHist"] = e.CommandArgument;
        BindCAHistGrid();
    }

    private void BindCAHistGrid()
    {
        DataTable dt = new DataTable();
        if (Session["dtCAHist"] == null)
        {
            string str = xms.getCashAdvHist(Convert.ToInt32(Session["UserID"]));
            List<CashAdvHistVO> lst = ser.Deserialize<List<CashAdvHistVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["dtCAHist"] = dt;
        }
        else
            dt = (DataTable)Session["dtCAHist"];

        if ((Session["SortExpr_CAHist"] != null) && Session["SortDir_CAHist"] != null)
        {
            DataView sortedView = new DataView(dt);
            sortedView.Sort = Session["SortExpr_CAHist"].ToString() + " " + Session["SortDir_CAHist"].ToString();
            gvCAHist.DataSource = sortedView;
        }
        else
            gvCAHist.DataSource = dt;
        gvCAHist.DataBind();
    }

    protected void gvCAHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_CAHist"] != null && Session["Control_CAHist"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_CAHist"].ToString());
                if (Session["SortDir_CAHist"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
                else
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px' />";
            }
        }
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblModifiedBy = (Label)e.Row.FindControl("lblModifiedBy");
            LinkButton lnkEditCAReqHist = (LinkButton)e.Row.FindControl("lnkEditCAReqHist");
            if (lblModifiedBy.Text == "0")
                lnkEditCAReqHist.Visible = true;
            else
                lnkEditCAReqHist.Visible = false;
        }
    }

    #region ReqHistory

    protected void DisplayCAReqHist(object sender, CommandEventArgs e)
    {
        Session.Remove("dtCAReqHist");
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        Label lblModfifiedOn = (Label)row.FindControl("lblModfifiedOn");
        hdnReqModDate.Value = lblModfifiedOn.Text;
        BindCAReqHistData(hdnReqModDate.Value);
        popCAHist.Show();
        popCAReqHist.Show();
    }

    protected void SortExpression_CAReqHist(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_CAReqHist"] = lnk.ID;
        if (Session["SortDir_CAReqHist"] == null || Session["SortDir_CAReqHist"].ToString() == "Asc")
            Session["SortDir_CAReqHist"] = "Desc";
        else
            Session["SortDir_CAReqHist"] = "Asc";
        Session["SortExpr_CAReqHist"] = e.CommandArgument;
        BindCAReqHistData(hdnReqModDate.Value);
    }

    void BindCAReqHistData(string modDate)
    {
        DataTable dt = new DataTable();
        if (Session["dtCAReqHist"] == null)
        {
            string str = xms.getCashAdvReqId(Convert.ToInt32(Session["UserID"]), modDate);
            List<ApproveRequestsVO> lst = ser.Deserialize<List<ApproveRequestsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["dtCAReqHist"] = dt;
        }
        else
            dt = (DataTable)Session["dtCAReqHist"];
        if ((Session["SortExpr_CAReqHist"] != null) && Session["SortDir_CAReqHist"] != null)
        {
            DataView sortedView = new DataView(dt);
            sortedView.Sort = Session["SortExpr_CAReqHist"].ToString() + " " + Session["SortDir_CAReqHist"].ToString();
            gvCAReqHist.DataSource = sortedView;
        }
        else
            gvCAReqHist.DataSource = dt;
        gvCAReqHist.DataBind();
    }

    #endregion

    #endregion

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCities(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["CitiesByRegion"];
        DataView dv = new DataView(dt, "CityZip LIKE '%" + prefixText + "%'", "CityZip", DataViewRowState.CurrentRows);
        string[] CountryNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            CountryNames[i] = dv.ToTable().Rows[i][6].ToString();
        return CountryNames;
    }
}
