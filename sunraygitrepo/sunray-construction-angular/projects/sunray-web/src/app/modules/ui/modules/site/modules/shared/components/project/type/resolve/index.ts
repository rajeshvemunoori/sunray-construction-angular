import { ResolveComponent } from './resolve.component'
import { AttributePromptComponent } from './attribute-prompt/attribute-prompt.component'

import * as attributes from './attributes'

export const components: any[] = [
  ResolveComponent,
  AttributePromptComponent,
  ...attributes.components,
]

export { ResolveComponent }
export { AttributePromptComponent }

export {
  BaseComponent as BaseAttributeComponent,
  JobTypeComponent as JobTypeAttributeComponent,
  ProjectRoleComponent as ProjectRoleAttributeComponent,
  StateComponent as StateAttributeComponent,
} from './attributes'
