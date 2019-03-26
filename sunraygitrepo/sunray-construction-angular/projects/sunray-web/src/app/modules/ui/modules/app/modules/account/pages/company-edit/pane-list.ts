import {
  AccountSettingComponent,
  PreferenceComponent,
  CompanyInfoComponent,
  RequestSettingComponent,
} from './panes'

export const paneList = [
  {
    name: "Company Info",
    active: true,
    componentClass: CompanyInfoComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Preferences",
    active: false,
    componentClass: PreferenceComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Request Settings",
    active: false,
    componentClass: RequestSettingComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Account Settings",
    active: false,
    componentClass: AccountSettingComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  }
]
