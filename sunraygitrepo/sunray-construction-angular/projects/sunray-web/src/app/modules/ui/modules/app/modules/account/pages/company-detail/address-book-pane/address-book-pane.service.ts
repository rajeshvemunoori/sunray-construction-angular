import * as _ from 'lodash'

import { Observable }   from 'rxjs'

import { Injectable } from '@angular/core'

import { Store } from '@ngrx/store'
import {
  DataService as SharedDataService,
} from '@sunray-ui-app/modules/imports'

@Injectable()
export class AddressBookPaneService extends SharedDataService {

  tables = [
    {
      'name': 'signors',
      'title': 'Signors',
      'item': 'address-book-signors-headers'
    },
    {
      'name': 'notaries',
      'title': 'Notaries',
      'item': 'address-book-notaries-headers'
    }
  ]

  loadTablesData() {
    let loadTableData = (table) => {
      return {
        'type': table['name'],
        'title': table['title'],
        'collection$': this[table["name"]+"$"],
        'header$': this.getTableHeader$(table['item']),
        'itemActions$': this.itemActions$
      }
    }
    return _.map(this.tables, loadTableData)
  }

  get signors$() {
    let selector = 'app.entities.companies.selectedEntitySignorsAll'
    return this.getStoreData$(selector)
  }

  get notaries$() {
    let selector = 'app.entities.companies.selectedEntityNotariesAll'
    return this.getStoreData$(selector)
  }
}
