import * as _ from 'lodash'

import { Observable } from 'rxjs'

import {
  of as observableOf
} from 'rxjs'

import { Injectable } from '@angular/core'

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

import { InputDropdownBuilder } from './input-dropdown-builder.service'

@Injectable({
  providedIn: 'root'
})
export class InputControlDataFactory {
  constructor(
    private inputDropdownBuilder: InputDropdownBuilder
  ) { }

  build$(
    resource: iEntity,
    resolvable: iEntity,
  ): Observable<iInputResolvableData> {

    let data = {
      resolvableType: <InputResolvableType>'InputControl',
      data: this.buildData(resource, resolvable)
    }
    return observableOf(data)
  }

  private buildData(entity, resolvable): iInputResolvableTypeData {
    let data = {
      value: entity[kebabCase(resolvable.name)],
      placeholder: resolvable.displayName,
      key: resolvable.name,
      label: resolvable.displayName,
      validators: resolvable.validators
    }
    return _.merge(data, this.controlTypeResolver(resolvable))
  }

  private controlTypeResolver(resolvable) {
    if(resolvable.name.includes("_id")) {
      return this.dropdownControlType(resolvable)
    }
    else if(resolvable.dataType == 'boolean') {
      return this.radioControlType(resolvable)
    } else {
      return this.textboxControlType()
    }
  }

  private textboxControlType() {
    return {
      controlType: 'textbox'
    }
  }

  private checkboxControlType() {
    return {
      controlType: 'checkbox'
    }
  }

  private dropdownControlType(resolvable) {
    return {
      controlType: 'dropdown',
      options: this.inputDropdownBuilder.provide(resolvable)
    }
  }

  private radioControlType(resolvable) {
    return {
      controlType: 'radio',
      options: this.radioOptions(resolvable)
    }
  }

  private radioOptions(resolvable) {
    return [
      {
        key: 'Yes',
        value: true,
        values: [true, 1]
      },
      {
        key: 'No',
        value: false, 
        values: [false, 0]
      }
    ]
  }
}
