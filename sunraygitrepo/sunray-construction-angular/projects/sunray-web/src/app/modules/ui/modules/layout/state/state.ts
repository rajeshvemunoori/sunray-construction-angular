import * as layout  from './layout'

import * as footer  from './footer'
import * as header  from './header'
import * as sidebar from './sidebar'

export interface iFeatureState {
  layout: layout.iState,
  footer: footer.iState,
  header: header.iState,
  sidebar: sidebar.iState,
}

export const initialState: iFeatureState = {
  layout: layout.initialState,
  footer: footer.initialState,
  header: header.initialState,
  sidebar: sidebar.initialState,
}
