import { HeaderComponent }        from './header.component'
import { NavbarComponent as HeaderNavbarComponent }        from './navbar/navbar.component'
import { MenuComponent }          from './menu/menu.component'
import { MobileNavbarComponent }  from './mobile-navbar/mobile-navbar.component'
import { GetPaidButtonComponent } from './get-paid-button/get-paid-button.component'

export const headerComponents: any[] = [
  HeaderComponent,
  HeaderNavbarComponent,
  MenuComponent,
  MobileNavbarComponent,
  GetPaidButtonComponent,
]

export * from './header.component'
export { HeaderNavbarComponent }
export * from './menu/menu.component'
export * from './mobile-navbar/mobile-navbar.component'
export * from './get-paid-button/get-paid-button.component'
