import { InjectionToken }   from '@angular/core'

import { ActionReducerMap } from '@ngrx/store'

export const ENTITY_TYPE_PROVIDER =
  new InjectionToken<any>("Sunray Entity Type Provider")

export const ENTITY_ADAPTER_FACTORY =
  new InjectionToken<any>("Sunray Entity Adapter Factory")


export const SUNRAY_API_CONFIG =
  new InjectionToken<ActionReducerMap<any>>('Sunray API Config')

export const SUNRAY_API_RESPONSE_PARSER =
  new InjectionToken<ActionReducerMap<any>>('Sunray API Response Parser')

export const SUNRAY_API_SERVICE =
  new InjectionToken<ActionReducerMap<any>>('Sunray API Service')

export const SUNRAY_ENTITY_ATTRIBUTE_BUILDER =
  new InjectionToken<ActionReducerMap<any>>('Sunray Entity Attribute Builder')

export const SUNRAY_ENTITY_SERVICE =
  new InjectionToken<ActionReducerMap<any>>('Sunray Entity Service')

export const SUNRAY_FEATURE_CONFIG =
  new InjectionToken<any>("Entity Feature Config")

export const SUNRAY_FEATURE_CONFIG_ATTRIBUTES =
  new InjectionToken<any>("SunRay Feature Config Attributes")

export const SUNRAY_FEATURE_NAME =
  new InjectionToken<any>("SunRay Feature Name")

export const SUNRAY_FEATURE_REDUCER =
  new InjectionToken<ActionReducerMap<any>>('Feature Reducer')

export const FEATURE_CONFIG_SERVICE =
  new InjectionToken<any>("Sunray Feature Config Service")

export const BASE_ENTITY =
  new InjectionToken<any>("Sunray Base Entity")

export const API_SERVICE =
  new InjectionToken<any>("Sunray Api Service")

export const API_ENDPOINT_PROVIDER =
  new InjectionToken<any>("Sunray Api Endpoint Provider")

export const ENTITY_EFFECTS =
  new InjectionToken<any>("Sunray Entity Effects")

export const SUNRAY_CUSTOM_SELECTORS =
  new InjectionToken<any>("Sunray Custom Selectors")
