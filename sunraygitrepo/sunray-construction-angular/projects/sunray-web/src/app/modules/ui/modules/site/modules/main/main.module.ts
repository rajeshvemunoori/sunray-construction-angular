import { NgModule } from '@angular/core'

import { MainRoutingModule } from './main-routing.module'

import { SharedModule } from '../shared/shared.module'

import * as pages from './pages'

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
  ],
  declarations: [
    ...pages.components,
  ],
  exports: [
    ...pages.components,
  ],
  entryComponents: [
    ...pages.components,
  ]
})
export class MainModule { }
