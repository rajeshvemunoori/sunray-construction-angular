import { LayoutComponent }  from './layout.component'

import * as content         from './content'
import * as footer          from './footer'
import * as header          from './header'
import * as subheader       from './subheader'

export const components: any[] = [
  LayoutComponent,
  ...content.components,
  ...header.headerComponents,
  ...footer.footerComponents,
  ...subheader.components,
]

export * from './layout.component'
export * from './content'
export * from './footer'
export * from './header'

export {
  SubheaderComponent,
} from './subheader'
