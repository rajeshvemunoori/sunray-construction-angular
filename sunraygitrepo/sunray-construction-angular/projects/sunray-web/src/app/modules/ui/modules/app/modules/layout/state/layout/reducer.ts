import * as _ from 'lodash';

import {
  LayoutActionTypes,
  LayoutActionsUnion,
} from './actions';

import {
  iLayoutState
} from './state';

export function layoutReducer(
  state: iLayoutState,
  action: LayoutActionsUnion
): iLayoutState {
  var deltaState = {};
  var navigationMenu

  switch (action.type) {
    case LayoutActionTypes.LAUNCH:
      deltaState = {
        launched: true
      };
      return _.assign({}, state, deltaState); 
    case LayoutActionTypes.SET_NAVIGATION_MENU_SLUG:
      navigationMenu = state.navigationMenu
      navigationMenu.slug = action.payload
      deltaState = {
        navigationMenu: navigationMenu
      };
      return _.assign({}, state, deltaState)
    case LayoutActionTypes.SET_NAVIGATION_MENU_MENU:
      navigationMenu = state.navigationMenu
      navigationMenu.menu = action.payload
      deltaState = {
        navigationMenu: navigationMenu
      };
      return _.assign({}, state, deltaState)
    default:
      return state;
  }
}
