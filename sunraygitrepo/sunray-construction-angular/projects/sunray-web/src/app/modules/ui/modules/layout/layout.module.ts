import { NgModule } from '@angular/core'

import { StoreModule }    from '@ngrx/store'
import { EffectsModule }  from '@ngrx/effects'

import { NgbModule }                from '@ng-bootstrap/ng-bootstrap'

import { SharedModule } from '../shared'

import { components }      from './components/index'
import { services }        from './services/index'
import { SearchComponent } from './components/layout/header/search/search.component'

import * as feature from './state'

@NgModule({
  imports: [
    NgbModule,
    StoreModule.forFeature(
      feature.featureName,
      feature.reducer,
      {
        initialState: feature.initialState,
      }
    ),
    EffectsModule.forFeature([
      ...feature.effects,
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
  providers: [
    ...services,
  ],
})
export class LayoutModule { }
