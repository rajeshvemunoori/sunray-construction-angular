import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { ProjectRoutingModule } from './project-routing.module';

import { pages } from './pages';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule,
  ],
  declarations: [
    ...pages,
  ],
  exports: [
    ...pages,
  ],
  entryComponents: [
    ...pages,
  ],
})
export class ProjectModule { }
