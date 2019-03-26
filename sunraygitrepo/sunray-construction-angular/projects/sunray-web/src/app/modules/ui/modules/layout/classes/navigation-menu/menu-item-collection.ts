import * as _ from 'lodash'

import {
  iNavigationMenuItemCollection,
  iNavigationMenuItem,
} from '@ceo/shared'

export class MenuItemCollection implements iNavigationMenuItemCollection {
  private _items: iNavigationMenuItem[]

  constructor(items: iNavigationMenuItem[])  {
    this._items = items
  }

  get items(): iNavigationMenuItem[] {
    return this._items
  }

  get sortedItems(): iNavigationMenuItem[] {
    return _.sortBy(this.items, 'order')
  }

  get isActive(): boolean {
    return !_.isNil(_.find(this.items, 'isActive'))
  }
}
