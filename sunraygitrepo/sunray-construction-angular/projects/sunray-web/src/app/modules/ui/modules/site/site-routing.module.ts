import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainModule } from './modules/main'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => MainModule,
  },
]

let allRoutes: Array <any> = [
  ...routes,
]

@NgModule({
  imports: [
    RouterModule.forChild(allRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SiteRoutingModule { }
