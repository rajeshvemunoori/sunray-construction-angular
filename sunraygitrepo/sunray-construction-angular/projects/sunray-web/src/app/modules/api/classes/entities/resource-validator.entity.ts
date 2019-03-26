import * as _ from 'lodash'

import { SunrayEntity } from './sunray.entity'

export class ResourceValidatorEntity extends SunrayEntity {
  isForAttribute(attrName: string) {
    return _.includes((this as any).attributeNames, attrName)
  }
}
