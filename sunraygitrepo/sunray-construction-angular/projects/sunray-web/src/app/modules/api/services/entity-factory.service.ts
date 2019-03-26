import {
  Observable,
} from 'rxjs'

import {
  map,
} from 'rxjs/operators'

import { Injectable } from '@angular/core'

import {
  EntityIdentifier,
  iEntity,
  iEntityConstructor,
  EntityTypeProviderService,
} from '@ceo/entity'

import {
  SunrayEntity,
} from '../classes'

@Injectable({
  providedIn: 'root'
})

export class EntityFactory {
  constructor(
    public entityTypeProvider: EntityTypeProviderService,
  ) {}

  build(
    entityName: string,
    attributes: any = {},
    id: EntityIdentifier = null,
    entityType: iEntityConstructor = SunrayEntity,
  ): iEntity {
    let params = {
      type: entityName,
      id: id,
      attributes: attributes,
    }
    return new entityType(params)
  }

  build$(
    entityName: string,
    attributes: any = {},
    id: EntityIdentifier = null,
  ): Observable<iEntity> {
    let featureName = 'app'
    let params = {
      type: entityName,
      id: id,
      attributes: attributes,
    }

    return this.entityType$(featureName, params).pipe(
      map(entityType => {
        return this.build(
          entityName,
          attributes,
          id,
          entityType, 
        )
      })
    )
  }

  private entityType$(featureName: string, params: any): Observable<iEntityConstructor> {
    return this.entityTypeProvider.provide$(featureName, params)
  }
}
