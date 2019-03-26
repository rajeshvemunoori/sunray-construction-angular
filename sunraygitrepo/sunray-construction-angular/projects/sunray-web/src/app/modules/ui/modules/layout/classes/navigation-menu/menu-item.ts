import * as _ from 'lodash'

import {
  iNavigationMenuItemAttributes,
  iNavigationMenuItem,
  iNavigationMenu,
  NavigationMenuItemDisplayType,
  UrlSlug,
} from '@ceo/shared'

import {
  Mixin,
  AttributeGetterSetter,
  AttributeUpdater,
} from '@ceo/shared'


@Mixin([AttributeGetterSetter, AttributeUpdater])
export class MenuItem implements iNavigationMenuItem,
  AttributeGetterSetter, AttributeUpdater {

  attributes: iNavigationMenuItemAttributes

  disableLink: boolean
  displayType: NavigationMenuItemDisplayType
  displayValue: string
  submenu: any
  isCurrentUrl: boolean
  url: UrlSlug

  constructor(attributes: any = {})  {
    this.attributes = attributes
    this.updateAttributes(this.attributes)
  }

  hasSubmenu(): boolean {
    return !_.isNil(this.submenu)
  }

  get className(): string {
    let classes = []

    if(this.isCurrentUrl) {
      classes.push('current')
    }

    if(this.isActive) {
      classes.push('active')
    }

    classes.push(this.itemDisplay)

    return _.join(_.compact(classes), ' ')
  }

  get isActive(): boolean {
    return this.isCurrentUrl || this.submenuIsActive()
  }

  private submenuIsActive(): boolean {
    return (this.hasSubmenu() && this.submenu.isActive)
  }


  //Mixin method
  updatedKeys: string[] = []
  updateAttributes(attributes: any): void {}
  createAttributeSettersAndGetters(): void {}
  createSettersAndGetters(props: any): void {}
}
