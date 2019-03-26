import * as _ from 'lodash'

import { SunrayEntity } from '../../classes'

import { SunrayEntityConfig } from './sunray-entity-config'

export function buildEntityConfig(
  params
) {

  let configType = _.get(params, 'entityConfig', SunrayEntityConfig)

  let configParams = _.omit(params, ['entityConfig'])
  configParams = _.defaults(configParams, {entityType: SunrayEntity})
  return new configType(configParams)
}

export function buildEntityConfigs(
  entityConfigParams
) {
  return _.map(
    _.sortBy(entityConfigParams, 'type'),
    buildEntityConfig
  )
}
