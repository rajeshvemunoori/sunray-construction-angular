import { ContentComponent }         from './content.component';

import * as sidebar   from './sidebar'
import * as workspace from './workspace'


export const components: any[] = [
  ContentComponent,
  ...sidebar.components,
  ...workspace.components,
]

export { ContentComponent }

export { sidebar }
export { workspace }
