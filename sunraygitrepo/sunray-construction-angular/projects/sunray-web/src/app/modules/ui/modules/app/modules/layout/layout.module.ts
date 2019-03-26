import { NgModule } from '@angular/core';

import { StoreModule }    from '@ngrx/store'
import { EffectsModule }  from '@ngrx/effects'

import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared'

import { components } from './components/index';
import { SearchComponent } from './components/layout/header/search/search.component';

import { reducer, initialState, effects }  from './state/state';


@NgModule({
  imports: [
    NgbModule,
    StoreModule.forFeature(
      'layout',
      reducer,
      {
        initialState: initialState,
      }
    ),
    EffectsModule.forFeature([
      ...effects,
    ]),
    SharedModule,
  ],
  declarations: [
    ...components,
    SearchComponent,
  ],
  exports: [
    ...components,
  ],
  entryComponents: [
    ...components,
  ],
})
export class LayoutModule { }

