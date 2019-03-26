import * as _ from 'lodash'

import * as SliceActions from './footer.actions'

import {
  iState,
} from './footer.state'

export function reducer(
  state: iState,
  action: SliceActions.Actions
): iState {
  var deltaState = {}

  switch (action.type) {
    case SliceActions.ActionTypes.Launch:
      deltaState = {
        launched: true
      }
      return _.assign({}, state, deltaState) 
    case SliceActions.ActionTypes.SetNavigationMenu:
      deltaState = {
        navigationMenu: action.payload
      };
      return _.assign({}, state, deltaState)
    default:
      return state
  }
}
