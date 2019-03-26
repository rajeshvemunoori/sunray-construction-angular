import { Action } from '@ngrx/store'

import { PayloadAction } from '@ceo/state'

import { sliceName } from './layout.config'

export interface iActionTypes {
  Launch: string,
}

export const ActionTypes: iActionTypes = {
  Launch: `${sliceName} Launch`,
}

export class Launch extends PayloadAction {
  readonly type = ActionTypes.Launch
}

export type Actions =
  Launch
