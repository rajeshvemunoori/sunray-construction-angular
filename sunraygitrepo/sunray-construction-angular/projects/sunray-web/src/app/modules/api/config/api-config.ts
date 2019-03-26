import { environment } from 'projects/sunray-web/src/environments/environment'

import { FeatureConfig } from '@ceo/entity'
import { ApiConfig } from '@ceo/shared'

import { featureConfig } from './feature-config'

let config = new FeatureConfig(featureConfig)

let params = {
  url: environment.apis.sunray.config.url,
  defaultBodyParams: {
    current_user_account_id: 5,
    api_adapter: "json_api"
  },
  defaultQueryParams: {
    current_user_account_id: 5,
    api_adapter: "json_api"
  },
  resourceTypes: config.entityTypes,
}

export const apiConfig = new ApiConfig(params)
