import { NgModule }         from '@angular/core'

import { NgbModule }                from '@ng-bootstrap/ng-bootstrap'

import {
  SharedDeclarablesModule,
  CeoFormsModule,
} from '@ceo/shared'
import { VendorDeclarablesModule }  from '@ceo/vendor'


import { WordpressApiModule as CmsApiModule }       from '@ceo/wordpress'
import { SunrayApiModule }          from '@sunray-api'

import { components }   from './components/index'
import { directives }   from './directives/index'
import { services }     from './services/index'
import { pages }        from './pages/index'

@NgModule({
  imports: [
    NgbModule,
    SharedDeclarablesModule,
    CeoFormsModule,
    VendorDeclarablesModule,
    CmsApiModule,
    SunrayApiModule,
  ],
  declarations: [
    ...components,
    ...directives,
    ...pages,
  ],
  exports: [
    SharedDeclarablesModule,
    CeoFormsModule,
    VendorDeclarablesModule,
    ...components,
    ...directives,
    ...pages,
  ],
  providers: [
    ...services,
  ]
})
export class SharedModule { }
