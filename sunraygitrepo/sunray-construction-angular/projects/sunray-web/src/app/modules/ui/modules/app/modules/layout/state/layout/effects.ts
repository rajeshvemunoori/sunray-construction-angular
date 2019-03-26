import * as _ from 'lodash';

import {
  Observable,
  defer,
  of as observableOf,
} from 'rxjs';

import { map, mergeMap } from 'rxjs/operators'


import { Injectable } from '@angular/core';

import { Store, Action }    from '@ngrx/store';
import { Actions, Effect, ofType, } from '@ngrx/effects';

import {
  iEntity,
  DataService,
} from '@ceo/entity'

import {
  PayloadAction,
} from '@ceo/state'

import * as LayoutActions from './actions'

@Injectable()
export class LayoutEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions<any>,
    private dataService: DataService,
  ) {}

  /*
  @Effect()
  cmsMenu$: Observable<Action> =
    this.actions$
        .pipe(
          ofType('[Layout] LOAD_NAVIGATION_MENU'),
          mergeMap((action: PayloadAction) => {
            let selectorName = 'cms.entities.menus.all'
            let selector = this.selectorService.getSelector(selectorName)
            let menuEntity$ = this.store.select(selector)

            let 

          }),
          mergeMap(

            return new LayoutActions.SetNavigationMenuMenu(payload)
            debugger
            return this.dataService.get$(resourceOpts);
          }),
          map((payload: any) => {
            return new LayoutActions.SetNavigationMenuMenu(payload)
          })
        )


  @Effect()
  init$: Observable<action> =
  defer(() => {
  return observableOf(new LayoutActions.LoadNavigationMenu())
  });

  private buildNavigationMenu(payload: iEntity[]): any {
  return [1,2,3]
  }
       */
}
