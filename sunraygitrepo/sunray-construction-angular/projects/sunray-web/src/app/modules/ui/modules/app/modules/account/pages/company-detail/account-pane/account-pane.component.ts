import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import { Component }          from '@angular/core'

import { iEntityCollection } from '@ceo/entity'

import { SharedBasePage as BasePage }  from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-account-company-detail-account-pane',
  templateUrl: './account-pane.component.html',
  styleUrls: ['./account-pane.component.scss']
})
export class AccountPaneComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'primaryEntity$',
      'getTableHeader$',
      'getStoreData$',
    ],
  }

  get entityHeader$(): Observable<iEntityCollection> {
    let item = 'company-detail-account-settings-headers'
    return this.getTableHeader$(item)
  }

  get collectionHeader$(): Observable<iEntityCollection> {
    let item = 'company-detail-account-rate-headers'
    return this.getTableHeader$(item)
  }

  get collection$(): Observable<iEntityCollection>{
    let selector = 'app.entities.companies.selectedEntityAccountingItemsAll'
    return this.getStoreData$(selector)
  }
}
