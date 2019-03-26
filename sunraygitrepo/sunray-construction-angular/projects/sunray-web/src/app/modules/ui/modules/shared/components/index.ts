import { commonComponents }          from './common'
import { projectComponents }         from './projects'
import * as base                from './base'

export const components: any[] = [
  ...commonComponents,
  ...projectComponents,
  ...base.components,
];

export * from './common'
export * from './projects'
export * from './base'
