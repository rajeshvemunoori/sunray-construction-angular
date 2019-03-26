import * as projectType from './type'
import * as deadline from './deadline'

export const components: any[] = [
  ...projectType.components,
  ...deadline.components,
]

export {
  ResolveComponent as TypeResolveComponent,
  AttributePromptComponent as TypeAttributePromptComponent,
  BaseAttributeComponent as TypeBaseAttributeComponent,
  JobTypeAttributeComponent as TypeJobTypeAttributeComponent,
  ProjectRoleAttributeComponent as TypeProjectRoleAttributeComponent,
  StateAttributeComponent as TypeStateAttributeComponent,
} from './type'

export {
  CalculatorComponent as DeadlineCalculatorComponent,
  WidgetComponent as DeadlineWidgetComponent,
} from './deadline'
