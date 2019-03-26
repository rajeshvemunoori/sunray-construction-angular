import * as _         from 'lodash'

import {
  Observable,
  of as observableOf,
  pipe,
} from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

import { Injectable } from '@angular/core'

import {
  iResourceIdentifier,
  iEntityService,
  EntityFactory,
  iApiResponse,
  iEntity,
} from '@ceo/entity'

import {
  ApiService,
} from '@ceo/shared'

@Injectable()
export class EntityService {}
/*
export class EntityService implements iEntityService {
}
  constructor(
    private apiService: ApiService,
    private entityFactory: EntityFactory,
  ) {}

  create$(...args: any) {
    return this.entityData$(this.apiService.create$(...args))
  }

  post$(...args: any) {
    return this.entityData$(this.apiService.post$(...args))
  }

  delete$(...args: any) {
    return this.entityData$(this.apiService.delete$(...args))
  }

  get$(...args: any) {
    return this.entityData$(this.apiService.get$(...args))
  }

  update$(...args: any) {
    return this.entityData$(this.apiService.update$(...args))
  }

  private entityData$(apiData$: any) {
    return apiData$.pipe(
      map(apiResponse => this.entityData(apiResponse)),
    )
  }

  private entityData(apiResponse: iApiResponse) {
    return {
      data: this.buildEntities(apiResponse),
      resourceIdentifier: apiResponse.resourceIdentifier,
    }
  }

  private buildEntities(apiResponse: iApiResponse): iEntity[] {
    var resourceIdentifier = apiResponse.resourceIdentifier
    var apiData = apiResponse.data

    let buildEntity = (entityData) => {
      return this.entityFactory.build(entityData, resourceIdentifier)
    }

    return _.map(apiData, buildEntity)
  }
}
*/
