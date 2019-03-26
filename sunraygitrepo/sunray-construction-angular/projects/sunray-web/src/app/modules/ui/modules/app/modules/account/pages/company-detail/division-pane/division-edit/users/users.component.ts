import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import {
  Component,
  ViewChild,
  Input
} from '@angular/core'

import { iEntity }      from '@ceo/entity'
import {
  InputType,
  FormComponent
} from '@ceo/shared'

import {
  SharedBasePage as BasePage,
} from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-account-company-detail-division-edit-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'entityRelationshipProvider',
      'itemActions$',
      'getTableHeader$',
    ],
  }
  
  searchAttributes: any={}

  @Input()
  entity: iEntity

  get collection$() {
    return this.entityRelationshipProvider.provide$(
      this.entity,
      'users',
      {load: false}
    )
  }

  get collectionHeader$() {
    let item = 'company-users-headers'
    return this.getTableHeader$(item)
  }

  search(event) {
    this.searchAttributes = {
      'first-name': event.searchText,
      'last-name': event.searchText,
      'email': event.searchText
    }
  }
}
