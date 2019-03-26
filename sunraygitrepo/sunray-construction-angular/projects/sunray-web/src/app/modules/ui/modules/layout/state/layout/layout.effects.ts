import * as _ from 'lodash'

import {
  Observable,
  defer,
  of as observableOf,
  combineLatest,
} from 'rxjs'

import { map, mergeMap, filter, tap } from 'rxjs/operators'


import { Injectable } from '@angular/core'

import { Store, Action }    from '@ngrx/store'
import { Actions, Effect }  from '@ngrx/effects'

import * as LayoutActions from './layout.actions'

import {
  iEntity,
  DataService,
  iEntityCollection,
  EntitySelectorService,
} from '@ceo/entity'

import {
  PayloadAction,
} from '@ceo/state'

@Injectable()
export class LayoutEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions<any>,
    private dataService: DataService,
    private selectorService: EntitySelectorService,
  ) {}

  @Effect()
  init$: Observable<Action> =
    defer(() => {
      return observableOf(new LayoutActions.Launch())
    })
}
