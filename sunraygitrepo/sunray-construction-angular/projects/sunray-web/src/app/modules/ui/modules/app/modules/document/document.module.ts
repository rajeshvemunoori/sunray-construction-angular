import { NgModule } from '@angular/core';

import { SharedModule } from '../shared'

import { DocumentRoutingModule } from './document-routing.module';

import { pages } from './pages';

@NgModule({
  imports: [
    SharedModule,
    DocumentRoutingModule,
  ],
  declarations: [
    ...pages,
  ],
})
export class DocumentModule { }
