import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { AdminRoutingModule } from './admin-routing.module';

import { pages } from './pages';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    ...pages,
  ],
})
export class AdminModule { }
