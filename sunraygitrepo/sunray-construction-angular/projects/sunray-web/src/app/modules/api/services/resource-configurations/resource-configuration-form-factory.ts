// Accepts:
// resourceType 'string'
// formName 'string'
//
// Returns a FormGroup
import * as _               from 'lodash'
import { Observable, of, zip, combineLatest }       from 'rxjs'
import {
  first, tap, take,
  map, mergeMap, skipWhile,
  startWith, filter,
  share,
} from 'rxjs/operators'

import { Injectable }       from '@angular/core'

import {
  InputControlService,
  iInputResolvableData,
  iInputResolvableTypeData,
} from '@ceo/shared'

import {
  iEntity
} from '@ceo/entity'

import {
  InputType,
  iInputGroup,
} from '../../interfaces'

import { InputGroup } from '../../classes'

import { InputFactory }             from '../forms/input-factory.service'
import { DataService }              from './form-factory/data.service'

import { Resolver }                 from './input-attribute-providers/resolver.service'

import { InputResolvableDataService } from './input-resolvable-data.service'

@Injectable({
  providedIn: 'root'
})
export class ResourceConfigurationFormFactory {
  constructor(
    private dataService: DataService,
    private inputFactory: InputFactory,
    private inputControlService: InputControlService,
    private resolver: Resolver,
    private inputResolvableDataService: InputResolvableDataService,
  ) {}

  build$(
    entity: iEntity,
    resourceOpts,
    resourceType = null,
  ): Observable<InputType> {

    let data$ = this.loadData$(resourceOpts)

    return data$.pipe(
      map(([resourceConfiguration, formFieldEntities]) => {
        return {
          resourceConfiguration: resourceConfiguration,
          formFieldEntities: formFieldEntities,
        }
      }),
      mergeMap(options => {
        return this.buildInputControls$(
          entity,
          options.resourceConfiguration,
          options.formFieldEntities
        )
      }),
      map(inputs => this.buildInputGroup(inputs, resourceType)),
      //share(),
    )
  }

  private loadData$(resourceOpts) {
    return this.dataService.loadData$(resourceOpts)
  }

  private buildInputControls$(
    entity: iEntity,
    resourceConfiguration,
    formFieldEntities
  ) {

    let buildInputResolvable$ = _.partial(
      _.bind(this.buildInputResolvable$, this),
      entity,
      resourceConfiguration
    )

    let inputResolvables$ =
      _.map(formFieldEntities.entities, buildInputResolvable$)

    var value = combineLatest(...inputResolvables$)

    let observable = Observable.create((observer) => {
      value.subscribe(item => {
        observer.next(item)
      })
    })

    return observable
  }

  private buildInputResolvable$(
    entity: iEntity,
    resourceConfiguration,
    formFieldEntity
  ) {

    let resolvables$ =
      this.resolver.resolve$(
        resourceConfiguration,
        formFieldEntity
      )

    return resolvables$.pipe(
      mergeMap((resolvables: any) => {
        return this.resolvableData$(entity, resolvables)
      }),
      mergeMap((data: iInputResolvableData) => {
        return this.resolveResolvable$(data)
      }),
    )
  }

  private resolvableData$(
    entity: iEntity,
    resolvables: any
  ): Observable<iInputResolvableData> {

    return this.inputResolvableDataService.build$(entity, resolvables)
  }

  private resolveResolvable$(resolvable: iInputResolvableData) {

    let data = resolvable.data
    if(resolvable != null) {
      switch(resolvable.resolvableType) {
        case "InputControl": {
          return this.buildInput$(data)
        }
        case "InputGroup": {
          let resourceOpts = _.pick(data, 'resourceType', 'formName')
          let fields$ = this.build$(data.entity, resourceOpts, data.key)
          return fields$
          // resolve = _.bind(this.buildGroup$, this)
          // return inputType$.map(inputs => this.buildInputGroup(inputs))
          // break
        }
      }
    }
  }

  private buildInputGroup(inputs, key): iInputGroup {
    return new InputGroup(inputs, key)
  }

  private buildInput$(data: iInputResolvableTypeData): Observable<InputType> {
    return of(this.inputFactory.build(data))
  }

}
