import { UrlSlug } from '@ceo/shared'

import {
  iNavigationMenu,
  iNavigationMenuItem,
  iNavigationMenuItemCollection,
} from '@ceo/shared'

export class Menu implements iNavigationMenu {
  slug: UrlSlug
  items: iNavigationMenuItemCollection
  private _isActive: boolean

  constructor(items: iNavigationMenuItemCollection) {
    this.items = items
  }

  get isActive(): boolean {
    return this.items.isActive
  }
}
