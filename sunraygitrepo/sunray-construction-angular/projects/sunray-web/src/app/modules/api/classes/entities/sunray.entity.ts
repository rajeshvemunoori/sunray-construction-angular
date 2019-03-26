import * as _ from 'lodash';

import {
  pipe,
  Observable
} from 'rxjs';
import {map} from 'rxjs/operators';

import {
  slugify,
} from '@ceo/core'

import {
  JsonApiEntity,
  iEntityConfig,
} from '@ceo/entity'

import { SunrayAttributeEntity } from './sunray-attribute.entity';

export class SunrayEntity extends JsonApiEntity {
  static _sliceName: string = 'sunray-entities'

  feature: string = 'app'

  iconUrl(
    attrName: string = 'name',
    theType: string = null
  ): string {
    if(!theType) {
      theType = this.type
    }

    let base = 'assets/frontend' 
    let name = slugify(_.get(this, attrName, 'icon'))

    return `/${base}/${theType}/${name}.svg`
  }

  getAttributeEntities$(header$: Observable<any>) {
    var this_ = this
    var attributeEntity = (entity) => {
      let attr = entity.attributes.name
      let displayName = entity.attributes.displayName
      return this_.attributeEntity(attr, displayName)
    }
    
    return header$.pipe(map((header) => {
      if(header) {
        return _.compact(
          _.map(header.entities, attributeEntity)
        )
      }
      else {
        return []
      }
    }));
  }

  private attributeEntity(attr, displayName) {
    if(_.includes(_.keys(this.attributes), attr)) {
      return new SunrayAttributeEntity({
        dataType: 'string',
        name: attr,
        value: this.getAttr(attr),
        defaultValue: this.getAttr(attr),
        displayName: displayName 
      })
    }

    return null
  }
}
