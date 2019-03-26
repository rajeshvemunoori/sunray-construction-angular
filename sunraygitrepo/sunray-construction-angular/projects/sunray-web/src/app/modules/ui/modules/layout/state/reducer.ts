import { 
  combineReducers,
} from '@ngrx/store'

import * as footer  from './footer'
import * as header  from './header'
import * as layout  from './layout'
import * as sidebar from './sidebar'

const reducers = {
  footer: footer.reducer,
  header: header.reducer,
  layout: layout.reducer,
  sidebar: sidebar.reducer,
};

export function reducer(state: any, action: any) {
  var reducer = combineReducers(reducers)
  return reducer(state, action)
}
