import * as _                 from 'lodash'
import { Observable, empty  } from 'rxjs'

import { map } from 'rxjs/operators'

import { Injector, Injectable, InjectionToken } from '@angular/core';

import {
  kebabCase,
  pluralize,
  snakeCase,
} from '@ceo/core'

import {
  iEntity,
  EntityRelationshipProvider,
  EntityData,
  JsonApiEntity,
} from '@ceo/entity'
import {
  iInputResolvableData,
  InputResolvableType,
} from '@ceo/shared'

import { EntityFactory } from '../../entity-factory.service'

@Injectable({
  providedIn: 'root',
})
export class InputGroupDataFactory {
  constructor(
    private entityRelationshipProvider: EntityRelationshipProvider,
    private entityFactory: EntityFactory,
  ) { }

  build$(
    resource: iEntity,
    resolvable: iEntity
  ): Observable<iInputResolvableData> {
    return this.loadRelationship$(resource, resolvable).pipe(
      map(relationshipEntity => {
        if(_.isEmpty(relationshipEntity)){
          relationshipEntity =
            this.entityFactory.build(this.pluralizeType(resolvable))
        }
        return this.buildResolvableData(<iEntity>relationshipEntity, resolvable)
      })
    )
  }

  private pluralizeType(resolvable): string {
    return pluralize(snakeCase(resolvable.className))
  }

  private buildResolvableData(entity: iEntity, resolvable): iInputResolvableData {
    return {
      resolvableType: <InputResolvableType>'InputGroup',
      data: this.buildData(entity, resolvable)
    }
  }

  private buildData(entity, resolvable) {
    return {
      entity: entity,
      key: this.inputKey(resolvable),
      resourceType: entity.type,
      formName: this.buildFormName(entity.type)
    }
  }

  private inputKey(entity) {
    return `${entity.name}_attributes`
  }

  private buildFormName(resourceType: string, formType: string = 'edit') {
    return `${resourceType}.${formType}`
  }

  private loadRelationship$(
    entity: iEntity,
    resolvable: iEntity
  ): Observable<EntityData> {
    return this.entityRelationshipProvider.provide$(
      entity,
      kebabCase(resolvable.name),
      {
        load: false
      }
    )
  }
}
