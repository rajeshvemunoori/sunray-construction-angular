import { Action } from '@ngrx/store'

import { PayloadAction } from '@ceo/state'

import { classify } from '@ceo/core'

import { sliceName } from './footer.config'

let classifiedSliceName = classify(sliceName)

export interface iActionTypes {
  Launch: string,
  LoadSeedData: string,
  LoadNavigationMenu: string,
  SetNavigationMenu: string,
}

export const ActionTypes: iActionTypes = {
  Launch: `[${classifiedSliceName}] Launch`,
  LoadSeedData: `[${classifiedSliceName}] LoadSeedData`,
  LoadNavigationMenu: `[${classifiedSliceName}] LoadNavigationMenu`,
  SetNavigationMenu: `[${classifiedSliceName}] SetNavigationMenu`,
}

export class Launch extends PayloadAction {
  readonly type = ActionTypes.Launch
}

export class LoadSeedData extends PayloadAction {
  readonly type = ActionTypes.LoadSeedData
}

export class LoadNavigationMenu extends PayloadAction {
  readonly type = ActionTypes.LoadNavigationMenu
}

export class SetNavigationMenu extends PayloadAction {
  readonly type = ActionTypes.SetNavigationMenu
}


export type Actions =
  Launch |
  LoadSeedData |
  LoadNavigationMenu |
  SetNavigationMenu
