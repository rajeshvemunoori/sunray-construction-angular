import * as _ from 'lodash'

import {
  pipe,
  BehaviorSubject,
  Observable,
  Subscription,
  combineLatest,
} from 'rxjs'

import { mergeMap,  map, filter } from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { select } from '@ngrx/store'

import {
  Router,
  NavigationStart
} from '@angular/router'

import {
  iResourceIdentifier,
  DataService as AppDataService,
} from '@ceo/entity'

import {
  routerSelectors,
} from '@ceo/state'

import {
  DataService,
  AppService,
  UiService,
} from '@sunray-ui-shared'

import {
  iNavigationMenu,
  Mixin,
  PropertyDelegator,
  Memoizer,
} from '@ceo/shared'

import { layoutSelectors } from '../state'

@Injectable({
  providedIn: 'root'
})
@Mixin([PropertyDelegator, Memoizer])
export class LayoutService implements PropertyDelegator {
  private _footerNavigationMenu$: Observable<iNavigationMenu>
  private _headerNavigationMenu$: Observable<iNavigationMenu>

  public delegatedProperties = {
    appService: [
      'routerNavigationStart$',
      'defineCustomElement',
      'buildCustomElement',
    ],
    dataService: [
      'store',
      'currentUserAccount$',
      'getTableHeaders$',
      'memoizedSunrayData$',
      'memoizedCmsData$',
      'cmsMenus$',
    ],
    uiService: [
      'showDialog',
    ],
  }

  constructor(
    public dataService: DataService,
    public appService: AppService,
    public uiService: UiService,
  ) {
    this.setAllDelegatedProperties()
  }


  loadMenu$(menuId: iResourceIdentifier): Observable<any> {
    return this.cmsMenus$
  }

  get footerNavigationMenu$(): Observable<iNavigationMenu> {
    return <any>this.memoized(
      '_footerNavigationMenu$',
      this.fetchFooterNavigationMenu$,
    )
  }

  fetchFooterNavigationMenu$(): Observable<iNavigationMenu> {
    return this.store.select(layoutSelectors.footerNavigationMenu)
  }

  get headerNavigationMenu$(): Observable<iNavigationMenu> {
    return <any>this.memoized(
      '_headerNavigationMenu$',
      this.fetchHeaderNavigationMenu$,
    )
  }

  fetchHeaderNavigationMenu$(): Observable<iNavigationMenu> {
    return this.store.select(layoutSelectors.headerNavigationMenu)
  }

  /*
  get routerNavigationStart$(): Observable<NavigationStart> {
    return this.appService.routerNavigationStart$
  }
  */


  /*
  get navigationMenu$(): Observable<iNavigationMenu> {
    return <Observable<iNavigationMenu>>this.store
      .select(layoutSelectors.navigationMenuMenu)
  }
  */

  // Mixin functions
  public setDelegatedProperties(source: any, propName: string[]): void {}
  public setAllDelegatedProperties(): void {}
}
