import * as action from './action'

import { StatePage }             from './state.page'
import { ActionsMenuComponent }  from './actions-menu/actions-menu.component'
import { BannerComponent }       from './banner/banner.component'
import { IntroductionComponent } from './introduction/introduction.component'

export const components: any[] = [
  StatePage,
  ActionsMenuComponent,
  BannerComponent,
  IntroductionComponent,
  ...action.components
]

export * from './state.page';
