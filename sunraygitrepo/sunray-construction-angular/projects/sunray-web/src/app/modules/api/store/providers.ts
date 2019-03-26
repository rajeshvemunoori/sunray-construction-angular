import { InjectionToken }   from '@angular/core'

import {
  HttpClient
} from '@angular/common/http'

import {
  Store,
  Action,
  ActionReducer,
} from '@ngrx/store'

import { Actions } from '@ngrx/effects'

import { InflectionService } from '@ceo/core'

import {
  ApiResponseParser,
  JsonApiResponseParser,
  ApiService,
  CsvToJsonService,
} from '@ceo/shared'

import {
  iEntityConfig,
  EntityAttributeBuilder,
  EntityFactory,
  EntityTypeProviderService,
  EntityEffects as SunrayEntityEffects,
  EntitySelectorNameService,
  EntityService,
  JsonApiEntityAttributeBuilder,
  ResourceIdentifierService,
  RouteEntityTypeProvider,
  EntitySelectorService,
  FEATURE_CONFIG,
  buildEntityService,
  buildFeatureConfig,
  buildFeatureReducer,
} from '@ceo/entity'

import { SunrayEntity } from '../classes/index'
import {
  apiConfig,
  featureConfig,
  featureName,
} from '../config/index'

import {
  SUNRAY_API_CONFIG,
  SUNRAY_API_RESPONSE_PARSER,
  SUNRAY_API_SERVICE,
  SUNRAY_CUSTOM_SELECTORS,
  SUNRAY_ENTITY_ATTRIBUTE_BUILDER,
  SUNRAY_ENTITY_SERVICE,
  SUNRAY_FEATURE_CONFIG,
  SUNRAY_FEATURE_CONFIG_ATTRIBUTES,
  SUNRAY_FEATURE_NAME,
  SUNRAY_FEATURE_REDUCER,
} from './tokens'

import {
  buildApiService,
  buildEntityEffects,
  buildSelectors,
} from './builders/index'

export const tokenProviders: any[] = [
  {
    provide: SUNRAY_API_CONFIG,
    useValue: apiConfig,
  },
  {
    provide: SUNRAY_API_RESPONSE_PARSER,
    useClass: JsonApiResponseParser,
  },
  {
    provide: SUNRAY_API_SERVICE,
    useFactory: buildApiService,
    deps: [
      SUNRAY_API_CONFIG,
      HttpClient,
      CsvToJsonService,
      SUNRAY_API_RESPONSE_PARSER,
    ]
  },
  {
    provide: SUNRAY_CUSTOM_SELECTORS,
    useValue: buildSelectors,
  },
  {
    provide: SUNRAY_ENTITY_ATTRIBUTE_BUILDER,
    useClass: JsonApiEntityAttributeBuilder,
  },
  {
    provide: SunrayEntityEffects,
    useFactory: buildEntityEffects,
    deps: [
      Store,
      Actions,
      SUNRAY_ENTITY_SERVICE,
      SUNRAY_FEATURE_CONFIG,
      ResourceIdentifierService,
    ],
  },
  {
    provide: SUNRAY_ENTITY_SERVICE,
    useFactory: buildEntityService,
    deps: [
      EntityFactory,
      SUNRAY_API_SERVICE,
      SUNRAY_ENTITY_ATTRIBUTE_BUILDER,
    ]
  },
  {
    provide: FEATURE_CONFIG,
    useValue: featureConfig,
    multi: true,
  },
  {
    provide: SUNRAY_FEATURE_CONFIG,
    useFactory: buildFeatureConfig,
    deps:[
      SUNRAY_FEATURE_CONFIG_ATTRIBUTES,
    ],
  },
  {
    provide: SUNRAY_FEATURE_CONFIG_ATTRIBUTES,
    useValue: featureConfig,
  },
  {
    provide: SUNRAY_FEATURE_NAME,
    useValue: featureName,
  },
  {
    provide: SUNRAY_FEATURE_REDUCER,
    deps: [
      SUNRAY_FEATURE_CONFIG,
      EntitySelectorService,
      EntitySelectorNameService,
      SUNRAY_CUSTOM_SELECTORS,
    ],
    useFactory: buildFeatureReducer,
  }
]
