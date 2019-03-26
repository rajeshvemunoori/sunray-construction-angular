import {
  ContactComponent,
  SignorComponent,
  NotaryComponent,
} from './panes'

export const paneList = [
  {
    name: "Contact",
    active: true,
    componentClass: ContactComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'contact'
  },
  {
    name: "Signor",
    active: true,
    componentClass: SignorComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'signor'
  },
  {
    name: "Notary",
    active: true,
    componentClass: NotaryComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'notary'
  },
]
