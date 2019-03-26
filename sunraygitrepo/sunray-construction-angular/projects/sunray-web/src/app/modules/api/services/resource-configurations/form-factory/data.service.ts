import * as _               from 'lodash'

import { first, filter,  take, map, mergeMap, skipWhile, single } from 'rxjs/operators'
import { Observable, pipe, combineLatest }       from 'rxjs'

import { Injectable }       from '@angular/core'

import {
  EntityRelationshipProvider,
}  from '@ceo/entity'

import {
  DataService as AppDataService,
  iEntityCollection,
} from '@ceo/entity'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private dataService: AppDataService,
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) {}

  loadData$(resourceOpts) {
    let resourceConfigurationData$ = this.loadResourceConfiguration$(resourceOpts.resourceType)

    let resourceConfiguration$ = resourceConfigurationData$.pipe(
      first(entity => this.isValidEntity(entity))
    )

    resourceConfiguration$.subscribe(data => this.inspectRC(data))

    let formFieldEntitiesData$ = this.loadFormEntity$(resourceOpts.formName)

    let formFieldEntities$ = formFieldEntitiesData$.pipe(
      mergeMap(entity => {
        return this.entityRelationshipProvider.provide$(entity, 'form-fields')
      }),
      first(entityCollection => this.isValidCollection(entityCollection))
    )

    formFieldEntities$.subscribe(data => this.inspectFFE(data))

    let data$ = combineLatest(resourceConfiguration$, formFieldEntities$).pipe(
      first(([resourceConfiguration, formFieldEntities]) => {
        return (
          this.isValidEntity(resourceConfiguration) &&
          this.isValidCollection(formFieldEntities)
        )
      })
    )

    data$.subscribe(data => this.inspectData(data))
    return data$
  }

  inspectRC(data) {
    return data
  }

  inspectFFE(data) {
    return data
  }

  inspectData(data) {
    return data
  }

  isValidEntity(entity) {
    let result = !_.isNil(entity)
    return result
  }

  isValidCollection(entityCollection) {
    let result = !_.isEmpty((<iEntityCollection> entityCollection).entities)
    return result
  }

  private loadResourceConfiguration$(resourceType) {
    return this.loadAppResource$("resource-configurations", resourceType)
  }

  private loadFormEntity$(formName) {
    let opts = {
      syncWithApi: false,
    }
    return this.loadAppResource$("forms", formName, opts)
  }

  private loadAppResource$(resourceType, resourceId, opts={}) {
    let resourceOpts = {
      feature: 'app',
      type: resourceType,
      id: resourceId 
    }
    return this.dataService.get$(resourceOpts, opts).pipe(
      filter(entityType => !_.isNil(entityType)))
  }
}
