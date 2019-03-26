import { NgModule } from '@angular/core'

import { DatePipe } from '@angular/common'

// Other module imports
import { AngularSvgIconModule } from 'angular-svg-icon'

import { SharedModule as UiSharedModule } from '@sunray-ui-shared'

import { components } from './components/index'
import { services }   from './services/index'
import { pages }      from './pages/index'
import { providers } from './providers/index'

@NgModule({
  imports: [
    AngularSvgIconModule,
    UiSharedModule,
  ],
  declarations: [
    ...components,
    ...pages,
  ],
  exports: [
    UiSharedModule,
    ...components,
    ...pages,
  ],
  providers: [
    ...services,
    ...providers,
  ],
  entryComponents: [
    ...components,
    ...pages,
  ],
})
export class SharedModule { }
