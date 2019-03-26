import {
  ProfilePaneComponent,
  DivisionPaneComponent,
  UserPaneComponent,
  PreferencePaneComponent,
  AccountPaneComponent,
  AdditionalInfoPaneComponent,
  AddressBookPaneComponent,
  InvoicePaneComponent,
} from './panes';

export const paneList = [
  {
    name: "Profile",
    active: true,
    componentClass: ProfilePaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Regions/Divisions",
    active: false,
    componentClass: DivisionPaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Users",
    active: false,
    componentClass: UserPaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Preferences",
    active: false,
    componentClass: PreferencePaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  /*
  {
    name: "Account",
    active: false,
    componentClass: AccountPaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Additional Info",
    active: false,
    componentClass: AdditionalInfoPaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
   */
  {
    name: "Address Book",
    active: false,
    componentClass: AddressBookPaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Invoice",
    active: false,
    componentClass: InvoicePaneComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  }
]
