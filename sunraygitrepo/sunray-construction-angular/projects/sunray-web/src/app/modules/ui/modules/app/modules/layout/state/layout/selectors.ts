import { pipe }   from 'rxjs';
import { filter } from 'rxjs/operators';

import { 
  select, createFeatureSelector,
  createSelector, MemoizedSelector
} from '@ngrx/store';

import { iLayoutState } from './state';

export const selectLayout  = createFeatureSelector<any> ('layout');

let selectNavigationMenuMenu = (state: iLayoutState) => {
  return state.navigationMenu.menu;
};

export const layoutSelectors = {
  navigationMenuMenu: selectNavigationMenuMenu
}
