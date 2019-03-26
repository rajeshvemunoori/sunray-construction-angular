// iInputAttributes
// Returns an Observable<ResourceAttribute>

import * as _ from 'lodash'

import {map} from 'rxjs/operators'

import { Observable }  from 'rxjs'

import { Injectable }       from '@angular/core'
import {
  iEntity,
  EntityRelationshipProvider,
  iEntityCollection
}  from '@ceo/entity'

import { iResolveableProvider } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class AttributeProvider implements iResolveableProvider {

  constructor(
    private entityRelationshipProvider: EntityRelationshipProvider
  ) { }

  provide$(resourceConfiguration, formFieldEntity): Observable<iEntity> {
    return this.entityRelationshipProvider
      .provide$(resourceConfiguration, 'resource-attributes')
      .pipe(
        map(attributeCollection => {
          return (<iEntityCollection> attributeCollection)
            .where({name: formFieldEntity.inputName}).entities[0]
        })
      )
  }
}
