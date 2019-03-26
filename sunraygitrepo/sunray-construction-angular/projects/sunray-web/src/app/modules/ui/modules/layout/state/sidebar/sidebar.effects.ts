import * as _ from 'lodash'

import {
  Observable,
  defer,
  of as observableOf,
  combineLatest,
} from 'rxjs'

import { map, mergeMap, filter, } from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { Store, Action }    from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'

import {
  iEntity,
  DataService,
  iEntityCollection,
} from '@ceo/entity'

import {
  PayloadAction,
} from '@ceo/state'

@Injectable()
export class SidebarEffects {
  constructor() {}
}
