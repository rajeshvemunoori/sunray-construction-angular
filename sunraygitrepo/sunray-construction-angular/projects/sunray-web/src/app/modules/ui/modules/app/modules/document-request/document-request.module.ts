import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { DocumentRequestRoutingModule } from './document-request-routing.module';

import { pages } from './pages';

@NgModule({
  imports: [
    SharedModule,
    DocumentRequestRoutingModule,
  ],
  declarations: [
    ...pages,
  ],
  exports: [
    ...pages,
  ],
  entryComponents: [
    ...pages,
  ]
})
export class DocumentRequestModule { }
