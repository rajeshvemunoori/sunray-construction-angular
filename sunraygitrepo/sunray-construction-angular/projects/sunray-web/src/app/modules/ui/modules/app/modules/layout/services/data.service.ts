import * as _ from 'lodash';

import { mergeMap,  map, filter } from 'rxjs/operators';

import {
  pipe,
  BehaviorSubject,
  Observable,
  Subscription,
  combineLatest,
} from 'rxjs';

import { Injectable } from '@angular/core';


import { Store, select } from '@ngrx/store';

import {
  iEntity,
  iEntityCollection,
  EntityCollection,
  EntityActions,
  EntityData,
  EntityRelationshipProvider,
  EntityRelationshipIdentifier,
  DataService as AppDataService,
  EntitySelectorService,
} from '@ceo/entity'

import {
  routerSelectors,
} from '@ceo/state';

//import { LayoutModule } from '../layout.module'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private features: any = {
    cms: {
      slice: 'cms.entities',
    },
    sunray: {
      slice: 'app.entities',
    },
  }

  private _navigationMenu$: Observable<iEntity>

  constructor(
    private store: Store<any>,
    private selectorService: EntitySelectorService,
    private dataService: AppDataService,
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) { }

  get navigationMenu$(): Observable<iEntity> {
    return (<Observable<iEntity>>this.memoizedCmsData$(
      '_navigationMenu$', 
      'menus.all'
    ))
  }

  private memoizedCmsData$(
    property: string,
    sliceName: string
  ): Observable<EntityData> {
    return this.memoizedStoreData$(this.cmsData$, property, sliceName)
  }

  private memoizedSunrayData$(
    property: string,
    sliceName: string
  ): Observable<EntityData> {
    return this.memoizedStoreData$(this.sunrayData$, property, sliceName)
  }

  private memoizedStoreData$(
    //loadData$: () => Observable<EntityData>,
    loadData$: any,
    property: string,
    sliceName: string
  ): Observable<EntityData> {

    let data$ = _.partial(loadData$, sliceName)
    let result = this.memoized(property, data$)
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

  private cmsData$(sliceName: string): Observable<EntityData> {
    return this.storeData$(
      this.getSelector(this.features.cms.slice, sliceName)
    )
  }

  private sunrayData$(sliceName: string): Observable<EntityData> {
    return this.storeData$(
      this.getSelector(this.features.app.slice, sliceName)
    )
  }

  private storeData$(
    selector: () => any,
  ): Observable<EntityData> {
    return this.store.select(selector)
  }

  private getSelector(
    featureName: string,
    sliceName: string
  ): () => EntityData {

    let selectorName = this.getSelectorName(featureName, sliceName)
    return this.selectorService.getSelector(selectorName)
  }

  private getSelectorName(
    featureName: string,
    sliceName: string
  ): string {

    return _.join([featureName, sliceName], '.')
  }
}
