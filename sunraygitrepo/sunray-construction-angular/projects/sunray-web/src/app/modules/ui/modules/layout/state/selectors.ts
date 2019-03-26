import {
  Observable,
  pipe,
} from 'rxjs'
import { filter } from 'rxjs/operators'

import { 
  select,
  createFeatureSelector,
  createSelector, 
  compose,
} from '@ngrx/store'

import * as footer  from './footer'
import * as header  from './header'
import * as layout  from './layout'
import * as sidebar from './sidebar'

import { iFeatureState } from './state'



let createNamespacedSelector = (selector) => {
  return createSelector(
    selectFeature,
    selector,
  )
}

import * as featureConfig from './config'

export const selectFeature = createFeatureSelector<any>(featureConfig.featureName)


export function selectSlice(
  sliceName: string,
) {

  return function selectSlice(
    state: iFeatureState,
  ): any {

    return (<any>state)[sliceName]
  }
}

export function featureSliceSelector(
  sliceName: string,
) {

  return createSelector(
    selectFeature,
    selectSlice(sliceName)
  )

}

export const selectFooter  = featureSliceSelector(footer.sliceName)
export const selectHeader  = featureSliceSelector(header.sliceName)
export const selectLayout  = featureSliceSelector(layout.sliceName)
export const selectSidebar = featureSliceSelector(sidebar.sliceName)

export const sidebarNavigationMenu: any = compose(sidebar.navigationMenu, selectSidebar)

export const footerNavigationMenu: any = compose(footer.navigationMenu, selectFooter)

export const headerNavigationMenu: any = compose(header.navigationMenu, selectHeader)

export const selectors = {
  sidebarNavigationMenu: sidebarNavigationMenu,
  footerNavigationMenu: footerNavigationMenu,
  headerNavigationMenu: headerNavigationMenu,
}





/*
let selectNavigationMenuId = (state: iLayoutState) => {
  return state.navigationMenu.id
}

let selectNavigationMenuSlug = (state: iLayoutState) => {
  return state.navigationMenu.slug;
}

let selectNavigationMenuMenu = (state: iLayoutState): iNavigationMenu => {
  return state.navigationMenu.menu;
}

export const layoutSelectors = {
  navigationMenuId: createNamespacedSelector(selectNavigationMenuId),
  navigationMenuSlug: createNamespacedSelector(selectNavigationMenuSlug),
  navigationMenuMenu: createNamespacedSelector(selectNavigationMenuMenu),
}
*/
