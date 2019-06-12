<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:GridView ID="gvw" runat="server" AutoGenerateColumns="false" Font-Size="9pt"
                                BackColor="LightGoldenrodYellow" BorderColor="Tan" BorderWidth="5px" CellPadding="3" ForeColor="Black"
                                
                                CssClass="table table-striped" GridLines="None" BorderStyle="None" EmptyDataText="No Records Found" EmptyDataRowStyle-ForeColor="Red">
                                <AlternatingRowStyle BackColor="PaleGoldenrod" />
                                <Columns>
                                    <asp:TemplateField>
                                        <HeaderTemplate>
                                            <asp:CheckBox ID = "chkAll" runat="server" AutoPostBack="true" />
                                        </HeaderTemplate>
                                        <ItemTemplate>
                                            <asp:CheckBox ID="CheckBox1" runat="server" AutoPostBack="true" />
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField HeaderText = "Sr.">
                                        <ItemTemplate>
                                            <asp:Label ID="lblRowNumber" Text='<%# Container.DataItemIndex + 1 %>' runat="server" />
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    
                                    <asp:BoundField DataField="StoreCategory" HeaderText = "Type" ReadOnly="True" SortExpression="StoreCategory"/>
                                    <asp:BoundField DataField="Name"  HeaderText = "Name" ReadOnly="True" SortExpression="Name" />
                                    <asp:BoundField DataField="Department"  HeaderText = "Department" ReadOnly="True" SortExpression="Department" />
                                    <asp:TemplateField HeaderText = "Amount">
                                        <ItemTemplate>
                                            <asp:Label ID="lblAmount" runat="server" Text='<%# Eval("Amount") %>' CssClass="mytxtWidth75"></asp:Label>
                                            <asp:TextBox ID="txtAmount" Text='<%# Eval("Amount") %>'  CssClass="mytxtWidth75" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField HeaderText = "Flat %">
                                        <ItemTemplate>
                                            <asp:Label ID="lblFixedPercent" runat="server" Text='<%# Eval("FixedPercentage") %>' CssClass="mytxtWidth30"></asp:Label>
                                            <asp:TextBox ID="txtFixedPercent" Text='<%# Eval("FixedPercentage") %>' CssClass="mytxtWidth30" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField>
                                        <ItemTemplate>
                                            <asp:Label ID="lblNMSDL1" runat="server" Text='<%# Eval("NMS-DL1") %>'></asp:Label>
                                            <asp:TextBox ID="txtNMSDL1" Text='<%# Eval("NMS-DL1") %>' CssClass="mytxtWidth30" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField>
                                        <ItemTemplate>
                                            <asp:Label ID="lblNMSBFB1" runat="server" Text='<%# Eval("NMS-BFB1") %>'></asp:Label>
                                            <asp:TextBox ID="txtNMSBFB1" Text='<%# Eval("NMS-BFB1") %>' CssClass="mytxtWidth30" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField>
                                        <ItemTemplate>
                                            <asp:Label ID="lblNMSDL2" runat="server" Text='<%# Eval("NMS-DL2") %>'></asp:Label>
                                            <asp:TextBox ID="txtNMSDL2" Text='<%# Eval("NMS-DL2") %>' CssClass="mytxtWidth30" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField>
                                        <ItemTemplate>
                                            <asp:Label ID="lblNMSBFB2" runat="server" Text='<%# Eval("NMS-BFB2") %>'></asp:Label>
                                            <asp:TextBox ID="txtNMSBFB2" Text='<%# Eval("NMS-BFB2") %>' CssClass="mytxtWidth30" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField>
                                        <ItemTemplate>
                                            <asp:Label ID="lblNMSDL3" runat="server" Text='<%# Eval("NMS-DL3") %>'></asp:Label>
                                            <asp:TextBox ID="txtNMSDL3" Text='<%# Eval("NMS-DL3") %>' CssClass="mytxtWidth30" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField>
                                        <ItemTemplate>
                                            <asp:Label ID="lblNMSBFB3" runat="server" Text='<%# Eval("NMS-BFB3") %>'></asp:Label>
                                            <asp:TextBox ID="txtNMSBFB3" Text='<%# Eval("NMS-BFB3") %>' CssClass="mytxtWidth30" runat="server" Visible = "false"/>
                                        </ItemTemplate>
                                    </asp:TemplateField>

                                </Columns>
                            </asp:GridView>
        </div>
    </form>
</body>
</html>
