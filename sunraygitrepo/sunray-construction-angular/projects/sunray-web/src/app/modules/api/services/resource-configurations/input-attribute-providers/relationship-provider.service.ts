
import {map} from 'rxjs/operators';
import * as _ from 'lodash'

import { Observable }  from 'rxjs';

import { Injectable }       from '@angular/core';

import {
  iEntity,
  EntityRelationshipProvider,
  iEntityCollection
}  from '@ceo/entity';

import { iResolveableProvider } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class RelationshipProvider {

  constructor(
    private entityRelationshipProvider: EntityRelationshipProvider
  ) { }

  provide$(
    resourceConfiguration,
    formFieldEntity,
    relationshipName
  ): Observable<iEntity> {
    return this.entityRelationshipProvider
      .provide$(resourceConfiguration, relationshipName, {load: false}).pipe(
      map(attributeCollection => {


        // will handle?

        let entities = (<iEntityCollection> attributeCollection)
          .where({name: formFieldEntity.inputName})
        return entities.entities[0];
      }));
  }
}

