import { FormFactory }      from './form-factory.service'
import { FormFieldFactory } from './form-field-factory.service'
import { InputFactory }            from './input-factory.service'

export const formServices: any[] = [
  FormFactory,
  FormFieldFactory,
  InputFactory
]

export * from './form-factory.service';
export * from './form-field-factory.service';
export * from './input-factory.service';
