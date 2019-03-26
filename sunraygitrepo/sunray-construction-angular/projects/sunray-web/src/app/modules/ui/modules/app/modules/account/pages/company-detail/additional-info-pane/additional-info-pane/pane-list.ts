import {
  DivisionDetailComponent,
  DivisionDefaultComponent,
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
]
