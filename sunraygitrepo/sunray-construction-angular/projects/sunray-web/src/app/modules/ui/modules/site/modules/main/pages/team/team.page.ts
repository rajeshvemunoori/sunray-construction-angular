import { Observable }         from 'rxjs'
import {
  Component,
  Injector,
} from '@angular/core'

import {
  BasePage,
  PageService,
  DataService,
} from '../imports'

import { MemberDetailPopupComponent } from './member-detail-popup/index'

@Component({
  selector: 'sunray-ui-site-team-page',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss']
})
export class TeamPage extends BasePage {
  delegatedProperties: any = {
    pageService: [
      'defineCustomElement',
      'buildCustomElement', 'showDialog',
    ],
    dataService: [
      'cmsTeamMembers$',
    ],
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  onEntitySelected(event) {
    let entity = event.entity
    this.showTeamMember(entity)
  }

  showTeamMember(entity) {
    let elementName = 'team-member-show-dialog-element'
    this.ensureCustomElement(elementName)

    let customElement = this.buildCustomElement(
      elementName,
      {
        entity: entity
      }
    )
    this.showCustomElement(customElement)
  }

  showCustomElement(customElement) {
    let dialogConfig = this.dialogConfig(customElement)
    let dialogComponent = this.showDialog(dialogConfig)

    dialogComponent.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

  dialogConfig(component) {
    return {
      component: component,
      config: {
        width: '800px'
      }
    }
  }

  ensureCustomElement(elementName) {
    let config = {
      elementName: elementName,
      ctor: MemberDetailPopupComponent,
      opts: {injector: this.injector},
    }
    this.defineCustomElement(config)
  }
}
