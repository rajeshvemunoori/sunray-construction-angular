import * as _           from 'lodash';
import {
  Observable,
  pipe
} from 'rxjs';
import { 
  map,
  mergeMap,
  filter
} from 'rxjs/operators'

import { Injectable } from '@angular/core';

import { 
  DataService as AppDataService,
  EntityRelationshipProvider,
  iEntity,
  iEntityCollection,
} from '@ceo/entity';

@Injectable({
  providedIn: 'root'
})
export class ActionAuthorizerService {

  constructor(
    private dataService: AppDataService,
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) { }
  
  authorizedResourceActions$(resourceType) {
    return this.authorizedActions$(resourceType).pipe(
      map((collection: iEntityCollection) => {
        return collection.where({"action-type": "resource"})
      })
    )
  }

  authorizedCollectionActions$(resourceType) {
    return this.authorizedActions$(resourceType).pipe(
      map((collection: iEntityCollection) => {
        return collection.where({"action-type": "collection"})
      })
    )
  }

  authorizedActions$(resourceType) {
    let opts = {
      load: false
    }
    let relationshipIdentifier = "resource-actions"
    return this.loadResourceConfiguration$(resourceType).pipe(
      mergeMap((entity: iEntity) => {
        return this.entityRelationshipProvider.provide$(
          entity, 
          relationshipIdentifier,
          opts
        )
      })
    )
  }

  private loadResourceConfiguration$(resourceType) {
    return this.loadSunRayResource$("resource-configurations", resourceType)
  }

  private loadSunRayResource$(resourceType, resourceId) {
    let resourceOpts = {
      feature: "app",
      type: resourceType,
      id: resourceId 
    }
    return this.dataService.get$(resourceOpts).pipe(
      filter(entityType => !_.isNil(entityType))
    )
  }
}
