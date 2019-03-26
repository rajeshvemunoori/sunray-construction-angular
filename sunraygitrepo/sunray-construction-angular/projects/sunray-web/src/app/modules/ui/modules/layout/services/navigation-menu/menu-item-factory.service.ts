import * as _ from 'lodash'

import { Injectable } from '@angular/core';

import { iEntity } from '@ceo/entity'

import {
  iNavigationMenuItemFactory,
  iNavigationMenuItem,
  iNavigationMenu,
  UrlSlug,
} from '@ceo/shared'

import {
  MenuItem as NavigationMenuItem,
} from '../../classes'

import {
  RouterEventsService,
} from '@sunray-ui-shared'

@Injectable({
  providedIn: 'root'
})
export class MenuItemFactory
  implements iNavigationMenuItemFactory {

  constructor(
    public routerEventsService: RouterEventsService
  ) {
  }

  build(item: any, submenu: any, url: UrlSlug = ''): iNavigationMenuItem {
    let attrs = this.buildAttributes(item, submenu, url)
    return new NavigationMenuItem(attrs)
  }

  buildAttributes(item: any, submenu: any, url: UrlSlug = ''): any {
    let isCurrentUrl = this.isCurrentUrl(item, url)
    let settings = _.get(item, 'settings', {})
    let attributes =
      _.defaults(_.pick(item, 'order', 'position', 'url'), settings)
    let customAttributes = {
      'disable-link': this.shouldDisableLink(item),
      'display-type': this.displayType(item),
      'is-current-url': isCurrentUrl,
      'display-value': item.title,
      'submenu': submenu,
    }

    return _.merge(attributes, customAttributes)
  }

  private shouldDisableLink(item: any): boolean {
    let value = _.get(item, ['settings', 'disable_link'])
    return value == 'on'
  }

  private displayType(item: any): string {
    if(this.shouldDisableLink(item)) {
      return 'text'
    }
    if(this.hasCustomContent(item)) {
      return 'custom'
    }

    return 'link'
  }

  private hasCustomContent(item) {
    return _.has(item, ['settings', 'custom_content'])
  }

  private isCurrentUrl(item: any, url: UrlSlug = '') {
    return (item.url == url)
  }
}
