import { SunrayEntity } from '../classes'

import { entityConfigs } from './entity-configs'

export const featureName = 'app'
export const featureConfig = {
  name: featureName,
  entityConfigs: entityConfigs,
  baseEntityType: SunrayEntity
}
