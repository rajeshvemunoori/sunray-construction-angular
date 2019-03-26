import * as _ from 'lodash';

import { mergeMap,  map, filter } from 'rxjs/operators';

import {
  pipe,
  BehaviorSubject,
  Observable,
  Subscription,
  combineLatest,
} from 'rxjs';


import {
  Injectable,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

import { Store, select } from '@ngrx/store';

import { DataService as AppDataService }   from '@ceo/entity';
import {
  iEntity,
  iEntityCollection,
  EntityCollection,
  EntityActions,
  EntityData,
  EntityRelationshipProvider,
  EntityRelationshipIdentifier,
  EntitySelectorService,
} from '@ceo/entity';

import {
  routerSelectors,
} from '@ceo/state';

@Injectable()
export class DataService implements OnDestroy {
  private _dashboardDataPointContexts$: Observable<iEntityCollection>
  private _dashboardDataPointContext$: Observable<iEntity>
  private _dashboardDataPoints$: Observable<iEntityCollection>
  private _dashboardDataPointTypes$: Observable<iEntityCollection>
  private _userAccount$: Observable<iEntity>

  constructor(
    private store: Store<any>,
    private selectorService: EntitySelectorService,
    private dataService: AppDataService,
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) {}

  ngOnDestroy() {
  }

  get userAccount$(): Observable<iEntity> {
    return (<Observable<iEntity>>this.memoizedStoreData$(
      '_userAccount$', 
      'userAccounts.selectedEntity'
    ))
  }

  get dashboardDataPointTypes$(): Observable<iEntityCollection> {
    return (<Observable<iEntityCollection>>this.memoizedDataServiceData$(
      '_dashboardDataPointTypes$',
      'dashboards-data-point-types'
    ))
  }

  get dashboardDataPointContexts$(): Observable<iEntityCollection> {
    return (<Observable<iEntityCollection>>this.memoizedDataServiceData$(
      '_dashboardDataPointContexts$',
      'dashboards-data-points-contexts'
    ))
  }

  get dashboardDataPointContext$(): Observable<iEntity> {
    if(!this._dashboardDataPointContext$) {

      this._dashboardDataPointContext$ =
        <Observable<iEntity>>this.entityRelationship(
          this.userAccount$, 
          'primary-dashboard-data-point-context'
        )
    }

    return this._dashboardDataPointContext$
  }

  get dashboardDataPoints$(): Observable<iEntityCollection> {
    if(!this._dashboardDataPoints$) {

      this._dashboardDataPoints$ =
        <Observable<iEntityCollection>>this.entityRelationship(
          this.dashboardDataPointContext$,
          'data-points',
          {
            load: false
          },
        )
    }

    return this._dashboardDataPoints$
  }

  dashboardDataPointItems$(dataPoint: iEntity): Observable<iEntityCollection> {
    //return (<Observable<iEntityCollection>>this.memoizedStoreData$('_dashboardDataPointItems$', 'documentRequests.all'))


    let filter = {}
    filter['dashboards-data-point-id'] = dataPoint.id
    let resourceOpts = {
      feature: 'app',
      type: 'dashboards-data-point-items',
      filter: filter
    }

    return this.dataService.get$(resourceOpts)
  }

  private entityRelationship(
    entity$: Observable<iEntity>,
    relationshipIdentifier: EntityRelationshipIdentifier,
    opts: any  = {}
  ): Observable<EntityData> {
    return entity$.pipe(
      filter(entity => !_.isNil(entity)),
      mergeMap(entity => {
        return this.entityRelationshipProvider.provide$(
          entity, 
          relationshipIdentifier,
          opts
        )
      })
    )
  }

  private memoizedDataServiceData$(
    property: string,
    resourceType: string,
    serviceOpts: any = {}
  ) {
    let dataServiceData$ =
      _.partial(this.dataServiceData$, resourceType, serviceOpts)
    let result = this.memoized(property, dataServiceData$)
    return (<Observable<EntityData>>result)
  }

  private memoizedStoreData$(
    property: string,
    sliceName: string
  ): Observable<EntityData> {

    let storeData$ = _.partial(this.storeData$, sliceName)
    let result = this.memoized(property, storeData$)
    return (<Observable<EntityData>>result)
  }

  private memoized(property: string, value: any): any {
    if(!this[property]) {
      let theFunction = _.bind(value, this)
      let result = theFunction()
      this[property] = <any>result
    }

    return this[property]
  }

  private dataServiceData$(
    resourceType: string,
    serviceOpts: any = {}
  ): Observable<EntityData> {

    let resourceOpts = {
      feature: 'app',
      type: resourceType,
    }

    return this.dataService.get$(resourceOpts, serviceOpts)
  }

  private storeData$(sliceName: string): Observable<EntityData> {
    let selector = this.getSelector(sliceName);
    return this.store.select(selector)
  }

  private getSelector(sliceName: string): () => EntityData {
    let selectorName = this.getSelectorName(sliceName)
    return this.selectorService.getSelector(selectorName)
  }

  private getSelectorName(
    sliceName: string,
    sliceNamespace: string = 'sunray.entities'
  ): string {

    return _.join([sliceNamespace, sliceName], '.')
  }
}

