import * as _ from 'lodash'

import {
  Observable,
  defer,
  of as observableOf,
  combineLatest,
} from 'rxjs'

import { map, mergeMap, filter, } from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { Store, Action }    from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'

import {
  iEntity,
  iEntityCollection,
  EntitySelectorService,
  DataService,
} from '@ceo/entity'

import {
  PayloadAction,
} from '@ceo/state'

import {
  iNavigationMenu,
  UrlSlug,
} from '@ceo/shared'

import {
  RouterEventsService,
} from '@sunray-ui-shared'


import {
  MenuFactory,
} from '../../services/navigation-menu'

@Injectable()
export class BaseEffects {
  constructor(
    protected store: Store<any>,
    protected actions$: Actions<any>,
    protected dataService: DataService,
    protected selectorService: EntitySelectorService,
    protected menuFactory: MenuFactory,
    protected routerEventsService: RouterEventsService,
  ) {}

  isValidMenu(payload: any): boolean {
    let menu = <any>payload
    return !_.isNil(menu) && !_.isNil(menu.items)
  }

  protected loadCmsMenu$(payload: any) {
    let resourceOpts = {
      feature: 'cms',
      type: 'menus',
      id: payload
    }
    return this.dataService.get$(resourceOpts)
  }

  protected loadCmsMenus$() {
    let selectorName = 'cms.entities.menus.all'
    let selector = this.selectorService.getSelector(selectorName)
    return this.store.select(selector)
  }

  protected buildNavigationMenu(menu: iEntity, url: UrlSlug): iNavigationMenu {
    return this.menuFactory.menuEntityToMenu(menu, url)
  }
}
