import { NgModule }         from '@angular/core'

import { StoreModule }   from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { tokenProviders as storeTokenProviders } from './store'

import {
  SUNRAY_FEATURE_REDUCER,
} from './store'

import {
  buildFeatureInitialState
} from './store/index'

import { featureName } from './config/index'

// Self-module imports
import { apiServices } from './services'

import { EntityEffects as SunrayEntityEffects } from '@ceo/entity'

@NgModule({
  imports: [
    StoreModule.forFeature(
      featureName,
      SUNRAY_FEATURE_REDUCER,
      {
        initialState: buildFeatureInitialState
      }
    ),
    EffectsModule.forFeature([SunrayEntityEffects]),
  ],
  providers: [
    ...apiServices,
    ...storeTokenProviders,
  ]
})
export class ApiModule {}
