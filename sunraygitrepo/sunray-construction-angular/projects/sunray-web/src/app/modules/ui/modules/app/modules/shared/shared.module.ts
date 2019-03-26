import { NgxPaginationModule } from 'ngx-pagination'

import { NgModule } from '@angular/core'

import { SharedModule as UiSharedModule } from '@sunray-ui-shared'

import { components } from './components/index'
import { services }   from './services/index'
import { pages }      from './pages/index'
import { providers } from './providers/index'

@NgModule({
  imports: [
    UiSharedModule,
    NgxPaginationModule,
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
