// ANYONE who can pass me an object that meets the interface
// iFormFieldData, I can return an InputBase object

import * as _ from 'lodash'

import { Injectable } from '@angular/core'

import {
  iInputResolvableData,
  InputType,
} from '@ceo/shared'

import {
  InputTextbox,
  InputDropdown,
  InputCheckbox,
  InputRadio,
} from '../../classes'

//iInputOptions type for attributes
export interface iInputData {
  inputType: string,
  attributes: any
}

@Injectable({
  providedIn: 'root'
})
export class InputFactory {
  build(entity): InputType {
    switch(entity.controlType) {
      case "textbox": {
        return new InputTextbox(entity)
      }
      case "dropdown": {
        return new InputDropdown(entity)
      }
      case "checkbox": {
        return new InputCheckbox(entity)
      }
      case "radio": {
        return new InputRadio(entity)
      }
      default: {
        return new InputTextbox(entity)
      }
    }
  }
}
