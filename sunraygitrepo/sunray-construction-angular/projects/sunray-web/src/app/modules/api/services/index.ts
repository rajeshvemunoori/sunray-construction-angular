import { EntityFactory }        from './entity-factory.service'
import { ResourceFormFactory }  from './resource-form-factory'

import {
  FormFactory,
  FormFieldFactory,
  InputFactory,
} from './forms'

import {
  AttributeProvider,
  AssociationProvider,
  Resolver
} from './resource-configurations/input-attribute-providers'

import { EntityService } from './entity.service'

import * as api from './api'
import * as authorization from './authorization'
import * as forms from './forms'
import * as resourceConfigurations from './resource-configurations'

export const apiServices: any[] = [
  ...api.services,
  ...forms.formServices,
  ...resourceConfigurations.resourceConfigurationServices,
  ResourceFormFactory,
  FormFactory,
  FormFieldFactory,
  EntityFactory,
  InputFactory,
  AttributeProvider,
  AssociationProvider,
  Resolver,
  authorization.ActionAuthorizerService,
  EntityService,
]

export * from './resource-form-factory'
export * from './forms'
export * from './resource-configurations'
export * from './authorization'

export { EntityService }
export { EntityFactory }
export {
  ApiRequestUrlBuilder,
} from './api'
