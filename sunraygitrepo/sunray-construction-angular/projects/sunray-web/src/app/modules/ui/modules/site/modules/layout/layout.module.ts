import { NgModule } from '@angular/core'

import { SharedModule } from '../shared'

import { LayoutModule as UiLayoutModule } from '@sunray-ui-layout'

import { components }    from './components/index'

@NgModule({
  imports: [
    SharedModule,
    UiLayoutModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  entryComponents: [
    ...components,
  ],
  providers: [
  ],
})
export class LayoutModule { }
