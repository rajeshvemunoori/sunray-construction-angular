import { NgModule }     from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Other module imports

import { SharedModule } from '../shared'

import { PrintRouterModule }  from './print.router';
import { printComponents }    from './components/index';

@NgModule({
  imports: [
    SharedModule,
    PrintRouterModule,
  ],
  declarations: [
    ...printComponents,
  ],
  exports: [
    ...printComponents,
  ],
  providers: [
    PrintRouterModule,
  ],
  entryComponents: [
  ]
})
export class PrintModule { }
