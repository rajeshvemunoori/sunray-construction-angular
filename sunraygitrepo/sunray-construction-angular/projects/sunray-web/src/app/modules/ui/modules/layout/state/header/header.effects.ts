import * as _ from 'lodash'

import {
  Observable,
  of as observableOf,
  defer,
  combineLatest,
  BehaviorSubject,
} from 'rxjs'


import {
  map, mergeMap,
  filter, first,
} from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { Action }    from '@ngrx/store'
import { Actions, Effect, ofType, } from '@ngrx/effects'

import {
  PayloadAction,
} from '@ceo/state'

import {
  iEntity,
  iEntityCollection,
  iResourceIdentifier,
} from '@ceo/entity'

import {
  iNavigationMenu
} from '@ceo/shared'

import { environment } from '@sunray-environment'

import { BaseEffects } from '../base'

import * as HeaderActions from './header.actions'

@Injectable()
export class HeaderEffects extends BaseEffects {

  @Effect()
  seed$: Observable<Action> =
    this.actions$
      .pipe(
        ofType('[Header] LoadSeedData'),
        map((action: PayloadAction) => {
          let menuResourceIdentifier = action.payload.menu
          let loadAction = new HeaderActions.LoadNavigationMenu(menuResourceIdentifier)
          return loadAction
        }),
      )
  
  @Effect()
  loadNavigationMenu$: Observable<Action> =
    this.actions$
      .pipe(
        ofType('[Header] LoadNavigationMenu'),
        mergeMap((action: PayloadAction) => this.dataService.get$(action.payload)),
        first((payload: iEntity) => this.isValidMenu(payload)),
        mergeMap((payload: iEntity) => {
          let subject$ = new BehaviorSubject(payload)

          let menuAndRoute = (menu, routerState) => {
            return {
              menu: menu,
              url: routerState.url,
            }
          }

          return combineLatest(subject$, this.routerEventsService.routerState$, menuAndRoute)
        }),
        map((payload: any) => this.buildNavigationMenu(payload.menu, payload.url)),


        map((payload: iNavigationMenu) => new HeaderActions.SetNavigationMenu(payload)),
      )

  @Effect()
  init$: Observable<Action> =
    defer(() => {
      let payload = this.seedConfig()
      let action = new HeaderActions.LoadSeedData(payload)
      return observableOf(action)
    })

  private seedConfig() {
    return environment.site.state.layout.seed.header
  }
}
