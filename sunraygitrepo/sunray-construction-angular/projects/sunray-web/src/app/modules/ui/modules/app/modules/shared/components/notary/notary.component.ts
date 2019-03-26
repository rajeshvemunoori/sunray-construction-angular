import * as _           from 'lodash'
import { Observable }   from 'rxjs'
import { map }          from 'rxjs/operators'

import {
  Component, OnInit,
  Input, Output, EventEmitter,
} from '@angular/core'

import {
  iEntityCollection,
  iEntity,
} from '@ceo/entity'
import { iInputGroup } from '@ceo/shared'

import { BaseComponent } from '../base'

@Component({
  selector: 'sunray-ui-app-shared-notary',
  templateUrl: './notary.component.html',
  styleUrls: ['./notary.component.scss']
})
export class NotaryComponent extends BaseComponent {
  @Input()
  dataService: any

  @Output()
  actionEmitter: EventEmitter<any> = new EventEmitter<any>()

  collection$: Observable<iEntityCollection>
  header$: Observable<iEntityCollection>
  itemActions$: Observable<iEntityCollection>
  collectionActions$: Observable<iEntityCollection>
  inputGroup$: Observable<iInputGroup>
  searchAttributes: any = {}

  ngOnInit() {
    this.collection$ = this.getCollection$()
    this.header$ = this.getHeader$()
    this.itemActions$ = this.getItemActions$()
  }

  search(event, contact) {
    this.searchAttributes = {
      'name': event.searchText
    }
  }

  add() {
    this.actionEmitter.emit({
      name: 'Notary'
    })
  }

  getItemActions$() {
    this.dataService.appResourceConfigurationsOpts = {
      id: 'notaries'
    }
    return this.dataService.itemActions$
  }

  getCollection$(): Observable<iEntityCollection> {
    let selectorName = "app.entities.companies.selectedEntityNotariesAll"
    return this.dataService.getStoreData$(
      selectorName
    )
  }

  getHeader$(): Observable<iEntityCollection> {
    let selectorName = "address-book-notaries-headers"
    return this.dataService.getTableHeader$(selectorName)
  }

  triggerAction(event) {
    this[event.action](event.entity)
  }

  destroy(entity: iEntity) {
    this.dataService.delete$(
      this.dataService.ri(entity)
    )
  }
}
