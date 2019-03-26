import * as app      from './app/index'
import * as signor   from './signor/index'
import * as notary   from './notary/index'
import * as table    from './table/index'
import * as header   from './header/index'
import * as item     from './item/index'
import * as base     from './base/index'
import * as form     from './form/index'
import * as formGroup from './form-group/index'
import * as field    from './field/index'
import * as input    from './input/index'

export const components: any[] = [
  app.AppComponent,
  signor.SignorComponent,
  notary.NotaryComponent,
  table.TableComponent,
  header.HeaderComponent,
  item.ItemComponent,
  form.FormComponent,
  formGroup.FormGroupComponent,
  field.FieldComponent,
  input.InputComponent,
  ...base.components,
];

export { app }
export { signor }
export { notary }
export { table }
export { header}
export { item }
export { form }
export { formGroup }
export { field }
export { input }
export * from './base/index'
