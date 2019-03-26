
import {map} from 'rxjs/operators';
// iInputAttributes
// Returns an Observable<resourceAssociation>

import * as _ from 'lodash'

import { Observable, Subscribable }  from 'rxjs';

import { Injectable }       from '@angular/core';
import {
  iEntity,
  EntityRelationshipProvider,
  iEntityCollection
} from '@ceo/entity';

import { iResolveableProvider } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class AssociationProvider implements iResolveableProvider {
  resourceConfiguration: any;
  constructor(
    private entityRelationshipProvider: EntityRelationshipProvider
  ) { }

  provide$(resourceConfiguration, formFieldEntity): Observable<iEntity> {
    return this.entityRelationshipProvider
      .provide$(resourceConfiguration, 'resource-associations', {load: false}).pipe(
      map(attributeCollection => {
        return (<iEntityCollection> attributeCollection)
          .where({name: formFieldEntity.inputName}).entities[0];
      }));
  }
}
