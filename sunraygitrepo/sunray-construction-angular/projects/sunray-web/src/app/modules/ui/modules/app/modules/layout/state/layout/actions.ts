import { Action } from '@ngrx/store';

import { PayloadAction } from '@ceo/state'

export enum LayoutActionTypes {
  LAUNCH = '[Layout] LAUNCH',
  LOAD_NAVIGATION_MENU = '[Layout] LOAD_NAVIGATION_MENU',
  SET_NAVIGATION_MENU_SLUG = '[Layout] SET_NAVIGATION_MENU_SLUG',
  SET_NAVIGATION_MENU_MENU = '[Layout] SET_NAVIGATION_MENU_MENU',
}

export class Launch extends PayloadAction {
  readonly type = LayoutActionTypes.LAUNCH;
}

export class SetNavigationMenuSlug extends PayloadAction {
  readonly type = LayoutActionTypes.SET_NAVIGATION_MENU_SLUG;
}

export class SetNavigationMenuMenu extends PayloadAction {
  readonly type = LayoutActionTypes.SET_NAVIGATION_MENU_MENU;
}

export class LoadNavigationMenu extends PayloadAction {
  readonly type = LayoutActionTypes.LOAD_NAVIGATION_MENU;
}

export type LayoutActionsUnion =
  Launch |
  SetNavigationMenuSlug |
  SetNavigationMenuMenu |
  LoadNavigationMenu;
