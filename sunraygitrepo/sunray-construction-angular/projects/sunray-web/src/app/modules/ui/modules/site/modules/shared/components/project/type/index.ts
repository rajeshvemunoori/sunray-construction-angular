import * as resolve from './resolve'

export const components: any[] = [
  ...resolve.components,
]

export {
  ResolveComponent,
  AttributePromptComponent,
  BaseAttributeComponent,
  JobTypeAttributeComponent,
  ProjectRoleAttributeComponent,
  StateAttributeComponent,
} from './resolve'
