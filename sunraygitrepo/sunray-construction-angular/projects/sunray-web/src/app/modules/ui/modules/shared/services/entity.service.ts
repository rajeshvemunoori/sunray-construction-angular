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
  filter, first, tap,
  skipWhile,
  distinctUntilChanged,
} from 'rxjs/operators'

import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Store, select } from '@ngrx/store'

import {
  InflectionService,
} from '@ceo/core'

import {
  Mixin,
  PropertyDelegator,
  Memoizer,
} from '@ceo/shared'

import {
  iDataServiceOpts,
  iEntity,
  iEntityCollection,
  iFeature,
  iResourceIdentifier,
  EntityCollection,
  EntityActions,
  EntityData,
  EntityRelationshipProvider,
  EntityRelationshipIdentifier,
  EntityTypeIdentifier,
  EntityIdentifier,
  EntitySelectorNameService,
  EntityDataService,
  EntitySelectorService,
  EntitySelectorTypes,
  EntitySelectorTypeKeys,
  iResourceIdentifier,
  iDataServiceOpts,
  entityFeatureSelectors,
} from '@ceo/entity'

import { WordpressEntity as CmsEntity }  from '@ceo/wordpress'
import { EntityFactory }    from '@sunray-api'

import { SunrayEntity }     from '@sunray-api/classes'

import { EntityTypeDynamicPropertyNameService } from './entity-type-dynamic-property-name.service'


type ResourceParam = iResourceIdentifier | string

@Injectable()
@Injectable({
  providedIn: 'root'
})
@Mixin([Memoizer])
export class EntityService implements Memoizer {
  features: any = {}
  features$: Observable<iFeature>
  _primaryEntity$: Observable<iEntity>

  constructor(
    protected store: Store<any>,
    protected dataService: EntityDataService,
    protected selectorService: EntitySelectorService,
    protected relationshipProvider: EntityRelationshipProvider,
    protected selectorNameService: EntitySelectorNameService,
    protected entityTypeDynamicPropertyNameService: EntityTypeDynamicPropertyNameService,
    protected entityFactory: EntityFactory,
  ) {
    this.subscribeToFeatures()
    this.watchPrimaryEntity()
  }

  set primaryEntity$(value: any) {}

  get primaryEntity$() {
    return this.memoized('_primaryEntity$', this.loadPrimaryEntity$)
  }

  entityData$(
    ri: iResourceIdentifier,
    opts: iDataServiceOpts = {}
  ): Observable<EntityData> {

    return this.dataService.get$(ri, opts)
  }

  getStoreData$(selectorName) {
    let selector = this.selectorService.getSelector(selectorName)
    return this.store.select(selector)
  }

  provideRelationship$(entity, relationshipName): any {
    return this.relationshipProvider.provide$(entity, relationshipName)
  }

  private loadPrimaryEntity$(): Observable<iEntity> {
    return this.store.select(entityFeatureSelectors.primaryEntity)
  }

  watchPrimaryEntity() {
    this.primaryEntity$.subscribe(entity => this.inspectPrimary(entity))
  }

  inspectPrimary(entity) {
    console.log(entity)
  }

  private subscribeToFeatures() {
    this.features$ = this.store.select(entityFeatureSelectors.features)
    this.features$
      .subscribe(features => this.setFeatures(features))
  }

  private setFeatures(features) {
    let addFeature = _.bind(this.addFeature, this)
    _.map(features, addFeature)
  }

  private addFeature(feature, featureName) {
    if(!_.has(this.features, featureName)) {
      this.setFeature(featureName, feature)
    }
  }

  private setFeature(featureName, feature) {
    this.features[featureName] = feature
    this.buildDynamicCollectionMethods(feature)
  }

  private buildDynamicCollectionMethods(feature) {
    let buildDynamicCollectionMethod =
      _.partial(_.bind(this.buildDynamicCollectionMethod, this), feature)

    _.map(feature.entityConfigs, buildDynamicCollectionMethod)
  }

  private buildDynamicCollectionMethod(feature, entity) {
    let propName =
      this.entityTypeDynamicPropertyNameService.build(feature.name, entity.name)
    let privatePropName = `_${propName}`

    var ri = this.buildResourceIdentifier(feature, entity)

    let getter = _.partial(_.bind(this.entityData$, this), ri)

    let props = {
      get: () => {
        return this.memoized(privatePropName, getter)
      },
      set: (value: any) => {}
    }
    Object.defineProperty(this, propName, props)
  }


  private buildResourceIdentifier(feature, entity) {
    return {
      feature: feature.name,
      type: entity.type
    }
  }

  private loadEmptyEntity(type: string): iEntity {
    return this.entityFactory.build(type)
  }

  // Mixin properties
  public memoized(property: string, value: any): any {}
}
