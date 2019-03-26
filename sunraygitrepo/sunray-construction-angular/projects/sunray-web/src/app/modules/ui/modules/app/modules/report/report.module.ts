import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { ReportRoutingModule } from './report-routing.module';

import { pages } from './pages';

@NgModule({
  imports: [
    SharedModule,
    ReportRoutingModule,
  ],
  declarations: [
    ...pages,
  ],
})
export class ReportModule { }
