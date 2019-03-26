import * as _ from 'lodash'

import * as SliceActions from './header.actions'

import {
  iState,
} from './header.state'

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
