import {
  ApiService,
  ApiRequestOptionsBuilder,
} from '@ceo/shared'

import {
  ApiRequestUrlBuilder,
} from '../../services'

export function buildApiService(
  apiConfig,
  http,
  csvToJsonService,
  responseParser,
): any {

  let urlBuilder = new ApiRequestUrlBuilder(apiConfig)
  let optionsBuilder = new ApiRequestOptionsBuilder(apiConfig)

  return new ApiService(
    http,
    csvToJsonService,
    responseParser,
    urlBuilder,
    optionsBuilder
  )
}
