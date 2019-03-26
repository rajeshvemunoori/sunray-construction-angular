import { iEntityConfig, EntityConfig } from '@ceo/entity'

import { entityConfigTypes }  from './types/index'
import { buildEntityConfigs } from './build-entity-configs'

export const entityConfigs: iEntityConfig[] = buildEntityConfigs(entityConfigTypes)
