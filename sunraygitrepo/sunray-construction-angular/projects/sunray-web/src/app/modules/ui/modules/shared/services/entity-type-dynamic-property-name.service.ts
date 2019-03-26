import * as _ from 'lodash'

import { Injectable } from '@angular/core'

import {
  InflectionService,
} from '@ceo/core'

@Injectable({
  providedIn: 'root'
})
export class EntityTypeDynamicPropertyNameService {
  constructor(
    protected inflectionService: InflectionService,
  ) {}

  build(featureName, entityName) {
    return _.join([
      this.inflectionService.camelCase(featureName),
      this.inflectionService.pascalCase(entityName),
      "$",
    ], '')
  }
}
