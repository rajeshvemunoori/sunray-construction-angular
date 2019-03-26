/*
import {
  EntityEffects as SunrayEntityEffects
} from '../../services/index' 
*/

import {
  EntityEffects,
} from '@ceo/entity'

export const buildEntityEffects = (
  store,
  actions,
  entityService,
  featureConfig,
  resourceIdentifierService,
) => {

  return new EntityEffects(
    store,
    actions,
    entityService,
    featureConfig,
    resourceIdentifierService,
  )
}
