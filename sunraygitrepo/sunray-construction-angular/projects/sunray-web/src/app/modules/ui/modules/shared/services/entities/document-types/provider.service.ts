import {
  Observable,
} from 'rxjs'

import {
  map, mergeMap,
  filter,
} from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { InflectionService } from '@ceo/core'

import {
  Mixin,
  PropertyDelegator,
  Memoizer,
} from '@ceo/shared'

import {
  EntityCollection,
  iEntityCollection
} from '@ceo/entity'

import {
  EntityService,
} from '../../entity.service'

@Injectable({
  providedIn: 'root'
})
@Mixin([PropertyDelegator, Memoizer])
export class Provider implements PropertyDelegator, Memoizer {
  public delegatedProperties = {
    entityService: [
      'cmsStatutoryDocuments$',
    ]
  }

  constructor(
    public entityService: EntityService,
  ) {
    this.setAllDelegatedProperties()
    this.cmsStatutoryDocuments$.subscribe(items => {
      console.log(items)
    })
  }

  provide$(requestTypes): iEntityCollection {
    return this.cmsStatutoryDocuments$.pipe(
      map(statutoryDocuments => {
        return this.buildDocumentTypeCollection(
          statutoryDocuments,
          requestTypes,
        )
      }),
    )
  }

  private buildDocumentTypeCollection(
    statutoryDocuments: iEntityCollection,
    requestTypes: iEntityCollection,
  ): iEntityCollection {

    let buildDocumentType = (statutoryDocuments, requestType) => {
      let statutoryDocument =
        statutoryDocuments.findByAttr("sunrayDocumentTypeId", requestType.requestTypeId)

      if(statutoryDocument) {
        let content = statutoryDocument.renderedContent
        requestType.setAttr('description', content)
      }

      return requestType
    }
    let build = _.partial(buildDocumentType, statutoryDocuments)
    let entities = requestTypes.map(build)
    let collection = new EntityCollection(entities)
    return collection.where({isRequired: true}).sort('sequenceOrder')
  }

  private get cmsStatutoryDocuments$() {
    return this.memoized('_appProjectTypes$', this.loadAppProjectTypes$)
  }

  // Mixin functions
  public setDelegatedProperties(source: any, propName: string[]): void {}
  public setAllDelegatedProperties(): void {}
  public memoized(property: string, value: any): any {}
}
