import * as _ from 'lodash'

import {
  BehaviorSubject,
} from 'rxjs'

import { Injectable } from '@angular/core';

import { iEntity } from '@ceo/entity'

import {
  iNavigationMenuFactory,
  iNavigationMenu,
  iNavigationMenuItemCollection,
  iNavigationMenuItem,
  UrlSlug,
} from '@ceo/shared'

import {
  Menu as NavigationMenu,
  MenuItem as NavigationMenuItem,
  MenuItemCollection as NavigationMenuItemCollection,
} from '../../classes'

import {
  MenuItemFactory,
} from './menu-item-factory.service'

@Injectable({
  providedIn: 'root'
})
export class MenuFactory implements iNavigationMenuFactory {
  constructor(
    private menuItemFactory: MenuItemFactory,
  ){}

  menuEntityToMenu(menuEntity: iEntity, url: UrlSlug = ''): iNavigationMenu {
    return this.build(menuEntity.items, url)
  }

  build(items: any[] = [], url: UrlSlug = ''): iNavigationMenu {
    let collection = this.buildItemCollection(items, url)
    return new NavigationMenu(collection)
  }

  buildItemCollection(items: any, url: UrlSlug = ''): iNavigationMenuItemCollection {
    let build = (item) => {
      return this.buildMenuItem(item, url)
    }
    let menuItems = _.map(items, build)
    return new NavigationMenuItemCollection(menuItems)
  }

  buildMenuItem(item: any, url: UrlSlug = ''): iNavigationMenuItem {
    var submenu = null

    if(_.has(item, 'children')) {
      submenu = this.build(item.children, url)
    }

    let menuItem = this.menuItemFactory.build(item, submenu, url)

    return menuItem
  }
}
