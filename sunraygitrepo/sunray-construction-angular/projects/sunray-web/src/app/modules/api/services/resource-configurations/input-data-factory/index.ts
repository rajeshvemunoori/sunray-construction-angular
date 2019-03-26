import { InputControlDataFactory }          from './input-control-data-factory.service'
import { InputGroupDataFactory }            from './input-group-data-factory.service'
import { InputControlDataValidatorFactory } from './input-control-data-validator-factory.service'
import { InputDropdownBuilder }             from './input-dropdown-builder.service'
import { InputDropdownOptionProvider }      from './input-dropdown-option-provider.service'

export const inputDataFactory: any[] = [
  InputControlDataFactory,
  InputControlDataValidatorFactory,
  InputDropdownBuilder,
  InputDropdownOptionProvider,
  InputGroupDataFactory,
]

export { InputControlDataFactory }
export { InputGroupDataFactory }
export { InputControlDataValidatorFactory }
export { InputDropdownBuilder }
export { InputDropdownOptionProvider }
