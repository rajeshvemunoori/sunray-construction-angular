import * as _ from 'lodash'

import * as SliceActions from './sidebar.actions'

import {
  iState,
} from './sidebar.state'

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
      let navigationMenu = state.navigationMenu
      navigationMenu.slug = action.payload
      deltaState = {
        navigationMenu: navigationMenu
      };
      return _.assign({}, state, deltaState)
    default:
      return state
  }
}
