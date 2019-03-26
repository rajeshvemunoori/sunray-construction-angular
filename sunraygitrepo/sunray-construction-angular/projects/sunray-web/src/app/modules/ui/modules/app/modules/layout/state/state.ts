import {
  layoutReducer,
  layoutInitialState,
} from './layout'

export const initialState: any = layoutInitialState
export const reducer: any = layoutReducer

import { LayoutEffects } from './layout'; 

export const effects: any[] = [
  LayoutEffects,
]

