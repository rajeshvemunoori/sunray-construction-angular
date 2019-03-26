import {
  iNavigationMenu
} from '@ceo/shared'

export interface iState {
  launched: boolean,
  navigationMenu: iNavigationMenu,
}

export const initialState: iState = {
  launched: false,
  navigationMenu: null
}

/*
    id: 35,
    slug: 'sunray-application-customer-navigation',
    menu: null
  }
import { EntityIdentifier } from '@ceo/entity'
import { UrlSlug } from '@ceo/shared'

import { iNavigationMenu } from '../../interfaces'

export interface iState {
  id: EntityIdentifier,
  slug: UrlSlug,
  menu: iNavigationMenu
}
*/
