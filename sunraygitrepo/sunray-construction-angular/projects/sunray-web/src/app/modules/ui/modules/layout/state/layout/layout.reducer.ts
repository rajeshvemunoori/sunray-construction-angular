import * as _ from 'lodash'

import * as SliceActions from './layout.actions'

import {
  iState
} from './layout.state'

export function reducer(
  state: iState,
  action: SliceActions.Actions
): iState {
  var deltaState = {}

  switch (action.type) {
    case SliceActions.ActionTypes.Launch:
      deltaState = {
        launched: true
      };
      return _.assign({}, state, deltaState);
    default:
      return state
  }
}
