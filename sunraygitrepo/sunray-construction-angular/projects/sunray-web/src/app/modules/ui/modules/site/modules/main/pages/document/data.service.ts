import * as _ from 'lodash'

import { filter } from 'rxjs/operators'

import {
  combineLatest as observableCombineLatest,
  Observable
} from 'rxjs'

import {
  map,
  mergeMap,
} from 'rxjs/operators'

import { Injectable }           from '@angular/core'

import {
  DataService as BaseDataService,
} from '../imports'

import {
  startsWith,
} from '@ceo/core'

import {
  JsonApiEntity,
  iEntityCollection,
} from '@ceo/entity'

import {
  routerSelectors,
} from '@ceo/state'

import { requestTypes } from './request-types'

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseDataService {
  _requestTypes = requestTypes
  slug: string

  _requestType$: Observable<any>
  _slug$: Observable<any>
  _states$: Observable<iEntityCollection>
  _stateRequestTypes$: Observable<iEntityCollection>

  isPageRoute(routerState): boolean {
    return startsWith(routerState.url, "/documents/")
  }

  get requestTypes() {
    return this._requestTypes
  }

  get requestTypeName$() {
    return this.slug$
  }

  get requestType$() {
    return this.memoized(
      '_requestType$',
      this.loadRequestType$
    )
  }

  loadRequestType$() {
    return this.requestTypeName$.pipe(
      map(name => this.requestTypes[name])
    )
  }

  get requestTypeStates$(): Observable<iEntityCollection> {
    return this.memoized(
      '_requestTypeStates$',
      this.loadRequestTypeStates$
    )
  }

  loadRequestTypeStates$() {
    return observableCombineLatest(this.states$, this.stateRequestTypes$)
      .pipe(
        map(([states, stateRequestTypes]) => {
          return this.statesForStateRequestTypes(states, stateRequestTypes)
        }),
      )
  }

  get states$(): Observable<iEntityCollection> {
    return this.entityService.appStates$
  }

  get stateRequestTypes$(): Observable<iEntityCollection> {
    return this.memoized(
      '_stateRequestTypes$',
      this.loadStateRequestTypes$
    )
  }


  loadStateRequestTypes$() {
    return this.requestType$
      .pipe(
        mergeMap(requestType => this.stateRequestTypesForRequestType$(requestType))
      )
  }

  private stateRequestTypesForRequestType$(requestType: any): Observable<iEntityCollection> {
    let ri = {
      type: 'state-request-types',
      filter: {
        'request-type-id': requestType.sunrayRequestTypeId
      }
    }

    return this.appStateRequestTypes$.pipe(
      map(collection => {
        return collection.where({'request-type-id': requestType.sunrayRequestTypeId})
      })
    )
  }

  private statesForStateRequestTypes(
    states: iEntityCollection,
    stateRequestTypes: iEntityCollection
  ): iEntityCollection {
    let stateIds = _.compact(_.uniq(_.map(stateRequestTypes.entities, 'stateId')))
    if(_.isEmpty(stateIds)) {
      return states
    }
    else {
      let filter = {
        id: stateIds
      }
      return states.where(filter)
    }
  }

  filteredStates$(searchTermObservable$: any): Observable<iEntityCollection> {
    return observableCombineLatest(
      this.requestTypeStates$,
      searchTermObservable$,
    ).pipe(
      map(([states, value]) => this.filteredStates(states, value))
    )
  }

  filteredStates(
    states: iEntityCollection,
    searchTerm: string
  ): iEntityCollection {

    let filter = {
      name: searchTerm
    }

    return states.stringSearch(filter)
  }

  /*

  allStates$() {
    let resourceOpts = {
      feature: "app",
      type: "states",
    }

    return this.dataService
      .get(resourceOpts)
  }

  buildStates(collection) {
    return _.map(collection.entities, this.buildState)
  }

  buildState(data) {
    return new JsonApiEntity(data)
  }

  buildRequestStates(collection, requestType) {
    collection = collection.where({'request-type-id': requestType.sunrayRequestTypeId})
    let states = _.uniqWith(
      _.map(collection.entities, this.buildRequestState),
      _.isEqual
    )
    return (new EntityCollection(states))
  }

  buildRequestState(stateRequestType) {
    let data = {
      id: stateRequestType['state-id'],
      type: 'states',
      attributes: {
        name: stateRequestType.state,
        code: stateRequestType['state-code']
      }
    }
    return new JsonApiEntity(data)
  }

  getStates$(requestType) {
    if(requestType.sunrayRequestTypeId == 7) {
      return this.allStates$()
    } else {
      let abc$ = this.getRequestStates$(requestType)
      return abc$
    }
  }

  */
}
