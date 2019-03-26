import * as companyInfoForm from './company-info/index'
import * as preferenceForm  from './preference/index'

export const components: any[] = [
  companyInfoForm.FormComponent,
  companyInfoForm.FormGroupComponent,
  companyInfoForm.FieldComponent,
  preferenceForm.PreferenceFormComponent,
  preferenceForm.PreferenceFormGroupComponent,
  preferenceForm.PreferenceFieldComponent,
  preferenceForm.PreferenceInputComponent
];

export * from './company-info/index'
export * from './preference/index'
