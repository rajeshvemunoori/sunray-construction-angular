import * as _           from 'lodash'

import { Observable }   from 'rxjs'

import {
  Component,
  Injector,
} from '@angular/core'

import {
  SharedBasePage as BasePage
} from '@sunray-ui-app/modules/imports'
import { PageService }  from '@sunray-ui-shared'

import { DataService }      from './data.service'
import { DivisionEditPage } from './division-edit'

@Component({
  selector: 'sunray-ui-app-account-company-detail-division-pane',
  templateUrl: './division-pane.component.html',
  styleUrls: ['./division-pane.component.scss'],
  providers: [DataService],
})

export class DivisionPaneComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'divisionUserEntities$',
      'itemActions$',
      'delete$',
      'ri',
      'loadEmptyEntity',
      'getTableHeader$',
    ],
    pageService: [
      'showDialog', 'defineCustomElement',
      'buildCustomElement',
    ],
  }
  startPage: number = 0
  paginationLimit: number = 1

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  get collectionHeader$() {
    let item = "company-divisions-headers"
    return this.getTableHeader$(item)
  }

  get collection$() {
    return this.divisionUserEntities$()
  }

  triggerAction(event_) {
    if(event_.action == "edit") {
      this.edit(event_.entity)
    }
    else if(event_.action == "destroy") {
      this.delete$(
        this.ri(event_.entity)
      )
    }
  }

  add() {
    this.edit(
      this.loadEmptyEntity('company-divisions')
    )
  }

  edit(entity) {
    let elementName = 'company-division-edit'
    this.ensureCustomElement(elementName)

    let customElement = this.buildCustomElement(
      elementName,
      {
        entity: entity
      }
    )

    this.showCustomElement(customElement, elementName)
  }

  ensureCustomElement(elementName) {
    let config = {
      elementName: elementName,
      ctor: DivisionEditPage,
      opts: {injector: this.injector},
    }
    this.defineCustomElement(config)
  }

  private showCustomElement(customElement, elementName) {
    let dialogComponent = this.showDialog(customElement, elementName)

    dialogComponent.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }
}
