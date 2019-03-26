import * as _               from 'lodash'

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'

import { Injectable } from '@angular/core'

import {
  EntityData,
  iEntity,
  EntityRelationshipProvider,
  iEntityCollection,
} from '@ceo/entity'

@Injectable({
  providedIn: 'root'
})
export class BaseProvider {
  relationshipName: string = ''

  constructor(
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) {}

  provide$(
    resourceConfiguration: iEntity,
    configurationType: string,
    attributeName: string,
  ): Observable<EntityData> {
    return this.relationship$(resourceConfiguration, configurationType).pipe(
      map(relationshipCollection => {
        return relationshipCollection
          .filterByInvoke('isForAttribute', attributeName)
      })
    )
  }

  private relationship$(
    resourceConfiguration: iEntity,
    relationshipName: string,
    opts: any = {load: false}
  ): Observable<iEntityCollection> {
    // let data$ = this.entityRelationshipProvider
    //   .provide$(
    //     resourceConfiguration,
    //     relationshipName,
    //     opts
    //   )
    // data$.subscribe( data => {
    //   debugger
    // })
    // return data$
    return <Observable<iEntityCollection>> this.entityRelationshipProvider
      .provide$(
        resourceConfiguration,
        relationshipName,
        opts
      )
  }
}
