// Accepts:
// resourceConfiguration entity
// form field key
// Checks association or attributes
// Returns a form field attributes

import * as _               from 'lodash'

import {zip as observableZip,  Observable } from 'rxjs'

import { first, filter, map, startWith, tap } from 'rxjs/operators'

import { Injectable } from '@angular/core'

import {
  iEntity,
  EntityData,
}      from '@ceo/entity'

import { iResolveableProvider } from './interfaces'

import {
  BaseProvider,
} from '../configuration-type-providers'

@Injectable({
  providedIn: 'root'
})
export class Resolver {
  private relationshipTypes: string[] = [
    'resource-attributes',
    'resource-associations',
    'resource-validators',
  ]

  constructor(
    private configurationTypeProvider: BaseProvider,
  ) {}

  resolve$(
    resourceConfiguration,
    formFieldEntity
  ): Observable<Observable<EntityData>[]> {

    let provideResolvable$ = _.bind(
      _.partial(
        this.provideResolvable$,
        resourceConfiguration,
        formFieldEntity
      ),
      this
    )

    let resolvables = _.map(this.relationshipTypes, provideResolvable$)
    return observableZip(...resolvables).pipe(
      filter(resolvables => {
        return this.checkResolvables(resolvables)
      }),
      map(resolvables => this.buildResolvable(resolvables)),
    )
  }

  private checkResolvables(resolvables) {
    return _.some(resolvables, (collection) => {
      return collection.length > 0
    })
  }

  private buildResolvable(resolvables) {
    return _.filter(resolvables, (collection) => {
      return collection.length > 0
    })
  }

  private provideResolvable$(
    resourceConfiguration,
    formFieldEntity,
    relationshipType,
  ): Observable<EntityData> {
    return <Observable<EntityData>> this.configurationTypeProvider.provide$(
      resourceConfiguration,
      relationshipType,
      formFieldEntity.inputName,
    )
  }

  private inspectResolvables(resolvables): any {
    debugger
    return _.head(resolvables)
  }
}
