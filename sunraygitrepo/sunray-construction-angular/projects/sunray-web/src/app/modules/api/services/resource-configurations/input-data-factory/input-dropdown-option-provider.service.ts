import * as _               from 'lodash'

import {
  Observable,
  of as observableOf
} from 'rxjs'
import { map }        from 'rxjs/operators'

import { Injectable } from '@angular/core'

import {
  iEntityCollection
} from '@ceo/entity'

@Injectable({
  providedIn: 'root'
})

export class InputDropdownOptionProvider {
  constructor() { }

  provide(data$: Observable<iEntityCollection>, entityKey){
    var dropdownData$ = data$.pipe(map(entityCollection =>{
      var getOptions = (entity) => {
        return this.getOptions(entityKey, entity)
      }
      return _.map(entityCollection.entities, getOptions)
    }))
    return dropdownData$
  }

  getOptions(key, entity) {
    return {
      key: entity.id,
      value: entity.attributes[key]
    }
  }
}

