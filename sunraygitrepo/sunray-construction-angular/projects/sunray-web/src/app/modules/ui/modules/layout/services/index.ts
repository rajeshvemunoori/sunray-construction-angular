import * as navigationMenu from './navigation-menu'

import { LayoutService }    from './layout.service'

export const services: any[]= [
  LayoutService,
  ...navigationMenu.services,
]

export * from './navigation-menu'
export { LayoutService }
