import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { SettingRoutingModule } from './setting-routing.module';

import { pages } from './pages';

@NgModule({
  imports: [
    SharedModule,
    SettingRoutingModule,
  ],
  declarations: [
    ...pages,
  ],
})
export class SettingModule { }
