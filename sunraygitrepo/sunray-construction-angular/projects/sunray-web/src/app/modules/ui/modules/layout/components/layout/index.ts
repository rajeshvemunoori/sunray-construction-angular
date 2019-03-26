import { LayoutComponent }          from './layout.component'
import { AlertComponent }           from './alert/alert.component';
import { FooterComponent }          from './footer/footer.component';
import { SubheaderComponent }       from './subheader/subheader.component';

import * as content from './content'
import * as header  from './header'

export const components: any[] = [
  LayoutComponent,
  AlertComponent,
  FooterComponent,
  SubheaderComponent,
  ...content.components,
  ...header.components,
]

export { content }
export { header }


export * from './layout.component'
export * from './alert/alert.component'
export * from './footer/footer.component'
export * from './subheader/subheader.component'
