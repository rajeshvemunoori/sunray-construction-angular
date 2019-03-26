import { InputResolvableDataService }       from './input-resolvable-data.service'

import { ResourceConfigurationFormFactory } from './resource-configuration-form-factory'

import * as configurationTypeProviders      from './configuration-type-providers'
import {inputDataFactory}                from './input-data-factory'

export const resourceConfigurationServices: any[] = [
  InputResolvableDataService,
  ResourceConfigurationFormFactory,
  ...configurationTypeProviders.services,
  ...inputDataFactory,
]

export * from './input-data-factory'
export * from './input-resolvable-data.service'
export * from './resource-configuration-form-factory'

export { configurationTypeProviders }
