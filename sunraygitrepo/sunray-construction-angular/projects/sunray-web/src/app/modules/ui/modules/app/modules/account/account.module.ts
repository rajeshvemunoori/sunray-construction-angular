import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { AccountRoutingModule } from './account-routing.module';

import { pages } from './pages';
import { components } from './components'

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule,
  ],
  declarations: [
    ...pages,
    ...components
  ],
  exports: [
    ...pages,
    ...components
  ],
  entryComponents: [
    ...pages,
  ]
})
export class AccountModule { }
