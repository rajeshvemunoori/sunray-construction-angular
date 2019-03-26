import * as _         from 'lodash'
import {
  Observable,
  zip as observableZip,
} from 'rxjs'
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core'

import { iEntity } from '@ceo/entity'

import { iInputResolvableData } from '@ceo/shared'

import {
  InputControlDataFactory,
  InputGroupDataFactory,
  InputControlDataValidatorFactory,
} from './input-data-factory'

@Injectable({
  providedIn: 'root'
})
export class InputResolvableDataService {
  constructor(
    private inputControlDataFactory: InputControlDataFactory,
    private inputGroupDataFactory: InputGroupDataFactory,
    private inputControlDataValidatorFactory: InputControlDataValidatorFactory,
  ) { }

  // ResourceAttributeEntity or ResourceAssoocaiti
  build$(
    entity: iEntity,
    resolvables: any
  ): Observable<iInputResolvableData> {
    let resolvable$ = _.partial(
      _.bind(this.resolvable$, this),
      entity
    )
    let inputResolvables = _.map(resolvables, resolvable$) 
    return this.mergeResolvables$(inputResolvables)
  }

  private mergeResolvables$(
    inputResolvables
  ): Observable<iInputResolvableData> {
    //@ts-ignore;
    // DEEPAK
    //// Type 'Observable<{}>' is not assignable to type
    //// 'Observable<iInputResolvableData>'.
    return observableZip(...inputResolvables).pipe(
      map(resolvables => {
        let inputGroupResolvable = this.getResolvable(
          resolvables,
          "InputGroup"
        )
        if(!_.isNil(inputGroupResolvable)) {
          return resolvables[0]
        } else {
          //@ts-ignore;
          //// Argument of type '{}[]' is not assignable to parameter 
          //// of type 'iInputResolvableData[]'.
          let inputControl = this.getResolvable(resolvables, "InputControl")
          //@ts-ignore;
          //// Argument of type '{}[]' is not assignable to parameter 
          //// of type 'iInputResolvableData[]'.
          let validator = this.getResolvable(resolvables, "InputValidator")
          return this.mergeValidator(inputControl, validator)
        }
      })
    )
  }

  private getResolvable(
    resolvables: any[],
    resolvableType: string
  ): iInputResolvableData {
    //@ts-ignore;
    //// Type 'number | (<U>(callbackfn: (value: iInputResolvableData, 
    //// index: number, array: iInputResolvableDat...' cannot be converted 
    //// to type 'iInputResolvableData'.
    return <iInputResolvableData> _.find(
      resolvables,
      { resolvableType: resolvableType }
    )
  }

  private mergeValidator(
    inputControl: iInputResolvableData,
    validator: iInputResolvableData
  ): iInputResolvableData {
    if(!_.isNil(validator)) {
      return <iInputResolvableData> _.merge(
        inputControl,
        { data: validator.data }
      )
    } else {
      return inputControl
    }
  }

  private resolvable$(
    entity,
    resolvableCollection
  ): Observable<iInputResolvableData> {
    let resolvableEntity = resolvableCollection.entities[0]
    var dataFactory = this.dataFactory(entity, resolvableEntity)
    return dataFactory.build$(entity, resolvableEntity)
  }

  private dataFactory(entity, resolvable) {
    switch(resolvable.type) {
      case "resource-attributes": {
        return this.inputControlDataFactory
      }
      case "resource-associations": {
        return this.inputGroupDataFactory
      }
      case "resource-validators": {
        return this.inputControlDataValidatorFactory
      }
      default: {
        return this.inputControlDataFactory
      }
    }
  }
}
