import {
  NoteComponent,
  TitleComponent,
  MoneyComponent,
  ProjectFileComponent,
  ProjectInfoComponent,
  RequestedDocumentComponent,
  StatutoryDocumentComponent,
  WaiverComponent,
} from './panes';

export const paneList = [
  {
    name: "Project Info",
    active: true,
    componentClass: ProjectInfoComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'project-info'
  },
  {
    name: "Deadline & Statutory Documents",
    active: false,
    componentClass: StatutoryDocumentComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'statutory-document'
  },
  {
    name: "Requested Documents",
    active: false,
    componentClass: RequestedDocumentComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Money",
    active: false,
    componentClass: MoneyComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Project Files",
    active: false,
    componentClass: ProjectFileComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Notes",
    active: false,
    componentClass: NoteComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
  {
    name: "Waivers",
    active: false,
    componentClass: WaiverComponent,
    directive: "dashboard-pane-container",
    iconName: 'sunray/user',
    alt: 'profile'
  },
]
