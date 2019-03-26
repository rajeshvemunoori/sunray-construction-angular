import * as _ from 'lodash'

import {
  pipe,
  BehaviorSubject,
  Observable,
  Subscription,
  combineLatest,
} from 'rxjs'

import {
  mergeMap, map,
  filter, tap,
  skipWhile,
} from 'rxjs/operators'

import { Injectable } from '@angular/core'

import {
  ActivatedRoute,
  Router,
} from '@angular/router'

import { Store, select } from '@ngrx/store'
import { startsWith } from '@ceo/core'
import {
  routerSelectors,
} from '@ceo/state'

import {
  iEntity,
  iEntityCollection,
  iFeature,
  DataService as AppDataService,
  EntityFactory,
  entityFeatureSelectors,
  EntityRelationshipProvider,
} from '@ceo/entity'

import {
  Mixin,
  PropertyDelegator,
  Memoizer,
} from '@ceo/shared'

/*
import {
  EntityFactory,
} from '@sunray-api'
*/

import { EntityService }        from './entity.service'
import { EntityTypeDynamicPropertyNameService } from './entity-type-dynamic-property-name.service'


@Injectable()
@Mixin([PropertyDelegator, Memoizer])
export class DataService implements PropertyDelegator, Memoizer {
  entityType: string = 'entities'
  features$: Observable<iFeature>

  currentUserAccount$: any
  getTableHeaders$: any
  memoizedSunrayData$: any
  memoizedCmsData$: any

  public delegatedProperties = {
    entityService: [
      'currentUserAccount$',
      'entityData$',
      'primaryEntity$',
      'getStoreData$',
      'loadEmptyEntity',
    ],
  }

  constructor(
    public store: Store<any>,
    public entityService: EntityService,
    public dataService: AppDataService,
    public entityTypeDynamicPropertyNameService: EntityTypeDynamicPropertyNameService,
    public entityFactory: EntityFactory,
    public entityRelationshipProvider: EntityRelationshipProvider
  ) {
    this.setAllDelegatedProperties()
    this.subscribeToFeatures()
  }

  get slug$(): Observable<string> {
    return this.loadSlug$()
  }

  get queryParams$(): Observable<string> {
    return this.loadQueryParams$()
  }

  protected loadSlug$() {
    return this.store
      .select(routerSelectors.selectState)
      .pipe(
        filter(routerState => _.has(routerState, 'params.slug')),
        map(routerState => routerState.params.slug),
      )
  }

  protected loadQueryParams$() {
    return this.store
      .select(routerSelectors.selectState)
      .pipe(
        map(routerState => routerState.queryParams),
      )
  }

  //dynamic setters

  get states$(): Observable<iEntityCollection> {
    return this.sunrayStates$
  }

  get webinars$(): Observable<iEntityCollection> {
    return this.cmsWebinars$
  }

  get recordedWebinars$(): Observable<iEntityCollection> {
    return this.cmsRecordedWebinars$
  }

  get stateContents$(): Observable<iEntityCollection> {
    return this.cmsStates$
  }

  getTableHeader$(item: string) {
    return this.appConfigs$.pipe(
      map((collection) => {
        return collection.where({item: item})
      })
    )
  }

  select(...args) {
    return (<any>this.store).select(...args)
  }

  get$(...args) {
    return (<any>this.dataService).get$(...args)
  }

  get(...args) {
    return (<any>this.dataService).get$(...args)
  }

  create$(...args) {
    return (<any>this.dataService).create$(...args)
  }

  update$(...args) {
    return (<any>this.dataService).update$(...args)
  }

  delete$(...args) {
    return (<any>this.dataService).delete$(...args)
  }


  /*
   * Methods imported from old DataService
  getTableHeader$(item: string) {
    let resourceOpts = {
      feature: "app",
      type: "configs",
      filter: {
        item: item
      }
    }
    return this.dataService.get$(resourceOpts);
  }

  itemActions$(
    resourceType: string
  ): Observable<iEntityCollection> {
    let actions = [
      "edit", "destroy"
    ]
    return this.actionAuthorizer.authorizedResourceActions$(
      resourceType
    ).pipe(map(collection => {
      return collection.where({name: actions})
    }))
  }

  collectionActions$(
    resourceType: string
  ): Observable<iEntityCollection> {
    let actions = ["create"]
    return this.actionAuthorizer.authorizedCollectionActions$(
      resourceType
    ).pipe(map(collection => {
      return collection.where({name: actions})
    }))
  }

  getSelectorData$(selectorName: string) {
    let selector = this.selectorService.getSelector(selectorName);
    return this.store.select(selector);
  }

  loadForm$(entity: iEntity, resourceOpts): Observable<any> {
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }

  loadFields$(
    entity$: Observable<iEntity>,
    resourceOpts
  ) {
    return entity$.pipe(
      mergeMap(entity => {
        return this.loadForm$(entity, resourceOpts)
      })
    )
  }

  loadEmptyEntity(type: string): iEntity {
    return this.entityFactory.build(type)
  }

  get$(resourceOpts) {
    return this.dataService.get$(resourceOpts);
  }

  create(resourceOpts) {
    this.dataService.create$(resourceOpts)
  }

  create$(resourceOpts) {
    this.create(resourceOpts)
  }

  update(resourceOpts) {
    this.dataService.update$(resourceOpts)
  }

  update$(resourceOpts) {
    this.update(resourceOpts)
  }

  delete(entity) {
    let resourceOpts = {
      feature: "app",
      type: entity.type,
      id: entity.id
    }

    this.delete$(resourceOpts)
  }

  delete$(resourceOpts) {
    this.dataService.delete$(resourceOpts)
  }

  */

  private subscribeToFeatures() {
    this.features$ = this.entityService.features$
    this.features$
      .subscribe(features => this.setFeatures(features))
  }

  private setFeatures(features) {
    _.map(features, _.bind(this.setFeature, this))
  }

  private setFeature(feature) {
    let addEntityProperty =
      _.partial(_.bind(this.addEntityProperty, this), feature)
    _.map(feature.entityConfigs, addEntityProperty)
  }

  private addEntityProperty(feature: iFeature, entityConfig: any) {
    let propName = this.entityTypeDynamicPropertyNameService
      .build(feature.name, entityConfig.name)

    let privatePropName = `_${propName}`

    let descriptor = this.getDescriptor(propName)
    if(!descriptor) {

      let props = {
        get: () => {
          let ri = this.entityService.buildResourceIdentifier(feature, entityConfig)
          let customRiPropName = `${_.trimEnd(propName, '$')}Opts`
          let customRi = this[customRiPropName] || {}
          ri = _.assign({}, ri, customRi)

          let getter = _.bind(_.partial(this.entityData$, ri), this)

          return this.memoized(privatePropName, getter)
        },
        set: (value: any) => {}
      }

      Object.defineProperty(this, propName, props)
    }
  }

  private getDescriptor(propName) {
    return Object.getOwnPropertyDescriptor(this, propName) ||
      Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), propName)
  }
  

  // Mixin functions
  public setDelegatedProperties(source: any, propName: string[]): void {}
  public setAllDelegatedProperties(): void {}
  public memoized(property: string, value: any): any {}
}
