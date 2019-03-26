import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { AccountingRoutingModule } from './accounting-routing.module';

import { pages }      from './pages';
import { components } from './components';

@NgModule({
  imports: [
    SharedModule,
    AccountingRoutingModule,
  ],
  declarations: [
    ...pages,
    ...components,
  ],
})
export class AccountingModule { }
