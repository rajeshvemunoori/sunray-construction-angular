import {
  DivisionDetailComponent,
  DivisionDefaultComponent,
  UsersComponent,
  AddressBookComponent,
  SignorsComponent,
  NotariesComponent,
} from './panes'

export const paneList = [
  {
    name: "Region/Division Details",
    active: true,
    componentClass: DivisionDetailComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'divisions'
  },
  {
    name: "Defaults",
    active: false,
    componentClass: DivisionDefaultComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'divisions'
  },
  {
    name: "Users",
    active: false,
    componentClass: UsersComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'divisions'
  },
  {
    name: "Address Book",
    active: false,
    componentClass: AddressBookComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'divisions'
  },
  {
    name: "Signors",
    active: false,
    componentClass: SignorsComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'divisions'
  },
  {
    name: "Notaries",
    active: false,
    componentClass: NotariesComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'divisions'
  },
]
