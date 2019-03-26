import { Observable } from 'rxjs'

import { Store, select } from '@ngrx/store'

import { iState } from './layout.state'

export function selectLaunched(state$: Store<iState>) {
  return state$.select(state => state.launched)
}
