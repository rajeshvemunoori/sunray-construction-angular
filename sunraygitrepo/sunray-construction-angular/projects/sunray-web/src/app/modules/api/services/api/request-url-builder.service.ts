import * as _ from 'lodash'

import {
  Injectable, Inject,
} from '@angular/core'

import {
  API_CONFIG,
  ApiRequestUrlBuilder as BaseApiRequestUrlBuilder,
  ApiUrl,
  iApiResourceIdentifier,
} from '@ceo/shared'

@Injectable()
export class RequestUrlBuilder extends BaseApiRequestUrlBuilder {
  constructor(
    @Inject(API_CONFIG) public apiConfig,
  ) {
    super(apiConfig)
  }

  build(ri: iApiResourceIdentifier): ApiUrl {
    return this.customResourceTypeUrl(ri) || this.getResourceTypeUrl(ri)
  }

  protected customResourceTypeUrl(ri: iApiResourceIdentifier): ApiUrl {
    var url

    switch (ri.type) {
      case "configs":
      case "translations":
      case "user-accounts":
        url = `assets/tmp/sunray/${ri.type}.json`
        break
      case "forms":
      case "form-fields":
        url = `assets/data/sunray/${ri.type}.csv`
        break
      default:
        url = this.getResourceTypeUrl(ri)
        break
    }

    return url
  }
}
