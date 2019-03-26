import {
  UserInfoComponent,
} from './panes'

import {
  signor,
  notary,
}  from '../../../shared/components/'

// from '../../../shared/components/signor'

export const paneList = [
  {
    name: "User Info",
    active: true,
    componentClass: UserInfoComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Signors",
    active: false,
    componentClass: signor.SignorComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Notaries",
    active: false,
    componentClass: notary.NotaryComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  }
]
