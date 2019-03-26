import { pipe }   from 'rxjs'
import { filter } from 'rxjs/operators'

import { 
  select, createFeatureSelector,
  createSelector, MemoizedSelector
} from '@ngrx/store'

import {
  iNavigationMenu
} from '@ceo/shared'

import { iState } from './sidebar.state'

export function navigationMenu(state: iState): iNavigationMenu {
  return state.navigationMenu
}

export function launched(state: iState): boolean {
  return state.launched
}
