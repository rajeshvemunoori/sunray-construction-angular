import { iNavigationMenu } from '../../interfaces'

export interface iNavigationMenuState {
  slug: string,
  menu: iNavigationMenu
}

export interface iLayoutState {
  launched: boolean,
  navigationMenu: iNavigationMenuState,
}
