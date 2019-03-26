import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import { Component }  from '@angular/core'

import { DataService }        from '@ceo/entity';
import { EntitySelectorService }    from '@ceo/entity';

import { iEntityCollection } from '@ceo/entity'
import { SharedBasePage as BasePage }  from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-account-company-detail-additional-info-pane',
  templateUrl: './additional-info-pane.component.html',
  styleUrls: ['./additional-info-pane.component.scss']
})
export class AdditionalInfoPaneComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'getTableHeader$',
      'getStoreData$',
    ],
  }

  get collection$(): Observable<iEntityCollection> {
    let selectorName = 'app.entities.companies.selectedEntityCommentsAll'
    return this.getStoreData$(selectorName)
  }

  get collectionHeader$(): Observable<iEntityCollection> {
    let item = "comments-headers"
    return this.getTableHeader$(item)
  }

  triggerAction(event_) {
    this[event_.action](event_.entity)
  }

  delete(entity) {
    let resourceOpts = {
      feature: "app",
      type: entity.type,
      id: entity.id 
    }

    this.dataService.delete$(resourceOpts)
  }
}
