import * as companyDetailPage      from './company-detail'
import * as companyDirectoryPage   from './company-directory'
import * as companyEditPage        from './company-edit'
import * as userEditPage           from './user-edit'

export const pages: any[] = [
  companyDetailPage.CompanyDetailPage,
  companyDetailPage.AccountPaneComponent,
  companyDetailPage.AdditionalInfoPaneComponent,
  companyDetailPage.AddressBookPaneComponent,
  companyDetailPage.AddressBookEditPage,
  companyDetailPage.ContactComponent,
  companyDetailPage.SignorComponent,
  companyDetailPage.NotaryComponent,
  companyDetailPage.DivisionPaneComponent,
  companyDetailPage.DivisionEditPage,
  companyDetailPage.DivisionDetailComponent,
  companyDetailPage.DivisionDefaultComponent,
  companyDetailPage.UsersComponent,
  companyDetailPage.AddressBookComponent,
  companyDetailPage.SignorsComponent,
  companyDetailPage.NotariesComponent,
  companyDetailPage.InvoicePaneComponent,
  companyDetailPage.PreferencePaneComponent,
  companyDetailPage.ProfilePaneComponent,
  companyDetailPage.UserPaneComponent,
  companyDetailPage.SettingComponent,
  companyDetailPage.DetailComponent,
  companyDetailPage.ContactInfoComponent,
  companyDirectoryPage.CompanyDirectoryPage,
  companyEditPage.CompanyEditPage,
  companyEditPage.AccountSettingComponent,
  companyEditPage.PreferenceComponent,
  companyEditPage.CompanyInfoComponent,
  companyEditPage.RequestSettingComponent,
  userEditPage.UserEditPage,
  userEditPage.UserInfoComponent,
]

export * from './company-detail'
export * from './company-directory'
export * from './company-edit'
export * from './user-edit'
