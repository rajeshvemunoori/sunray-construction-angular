import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { DashboardRoutingModule } from './dashboard.routing';

import { components }   from './pages/index';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ...components,
  ]
})
export class DashboardModule { };
