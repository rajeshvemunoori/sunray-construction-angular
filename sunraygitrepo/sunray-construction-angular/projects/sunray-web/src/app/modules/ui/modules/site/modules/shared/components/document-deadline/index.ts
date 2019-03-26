import { DetailComponent } from './detail/detail.component';
import { ListComponent }   from './list/list.component';

import * as calculator from './calculator'
import * as widget from './widget'

export const components: any[] = [
  ...calculator.components,
  ...widget.components,
  DetailComponent,
  ListComponent,
]

export { widget }
export { calculator }
export { DetailComponent }
export { ListComponent }
