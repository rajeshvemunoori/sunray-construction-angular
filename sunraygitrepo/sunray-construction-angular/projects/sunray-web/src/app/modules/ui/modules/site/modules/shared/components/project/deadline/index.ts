import { CalculatorComponent } from './calculator/calculator.component'

import * as widget from './widget/index'


export const components: any[] = [
  CalculatorComponent,
  ...widget.components,
]

export {
  CalculatorComponent,
}

export {
  BreadcrumbComponent,
  WidgetComponent,
} from './widget/index'
