import { Action } from '@ngrx/store'

import { PayloadAction } from '@ceo/state'

import { sliceName } from './sidebar.config'

export interface iActionTypes {
  Launch: string,
  SetNavigationMenu: string,
}

export const ActionTypes: iActionTypes = {
  Launch: `${sliceName} Launch`,
  SetNavigationMenu: `${sliceName} SetNavigationMenu`,
}

export class Launch extends PayloadAction {
  readonly type = ActionTypes.Launch
}

export class SetNavigationMenu extends PayloadAction {
  readonly type = ActionTypes.SetNavigationMenu
}


export type Actions =
  Launch |
  SetNavigationMenu
