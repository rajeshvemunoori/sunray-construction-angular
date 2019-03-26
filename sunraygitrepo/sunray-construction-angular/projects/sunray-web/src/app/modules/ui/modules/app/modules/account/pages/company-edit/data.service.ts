import * as _           from 'lodash'
import { Observable }   from 'rxjs'
import {
  mergeMap, skipWhile
} from 'rxjs/operators'
import { Store }        from '@ngrx/store'

import { Injectable } from '@angular/core'

import {
  entityFeatureSelectors,
  iEntity,
  DataService as AppDataService
} from '@ceo/entity'

import { ResourceFormFactory, EntityFactory } from '@sunray-api'

@Injectable()
export class DataService {
  entity: iEntity

  constructor(
    private store: Store<any>,
    private dataService: AppDataService,
    private resourceFormFactory: ResourceFormFactory,
    private entityFactory: EntityFactory,
  ) { }

  loadFields$(
    entity$: Observable<iEntity>,
    formName: string
  ) {
    return entity$.pipe(
      mergeMap(entity => {
        this.entity = entity
        return this.loadForm$(entity, formName)
      })
    )
  }

  loadForm$(entity: iEntity, formName: string): Observable<any> {
    let resourceOpts = {
      resourceType: 'companies',
      formName: formName
    }
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }

  loadEntity$(): Observable<any> {
    return this.store.select(entityFeatureSelectors.primaryEntity).pipe(
      skipWhile(entity => _.isNil(entity))
    )
  }

  update(payload) {
    let resourceOpts = {
      feature: "app",
      type: "companies",
      id: this.entity.id,
      data: payload
    }

    this.dataService.update$(resourceOpts)
  }
}
