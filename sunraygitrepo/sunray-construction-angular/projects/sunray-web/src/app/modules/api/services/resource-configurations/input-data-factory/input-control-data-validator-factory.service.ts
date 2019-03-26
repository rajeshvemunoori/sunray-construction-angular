import {
  of as observableOf,
  Observable
} from 'rxjs'

import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

import { kebabCase } from '@ceo/core'

import {
  iEntity,
  iEntityCollection,
} from '@ceo/entity'

import {
  iInputResolvableData,
  iInputControlOptions,
  iInputResolvableTypeData,
  InputResolvableType,
} from '@ceo/shared'

@Injectable({
  providedIn: 'root'
})
export class InputControlDataValidatorFactory {

  constructor() { }

  build$(
    resource: iEntity,
    resolvable: iEntity,
  ): Observable<iInputResolvableData> {
    let data = {
      resolvableType: <InputResolvableType>'InputValidator',
      data: this.buildData(resource, resolvable)
    }
    return observableOf(data)
  }

  private buildData(entity, resolvable): iInputResolvableTypeData {
    return {
      validators: [ Validators.required ] 
    }
  }
}
