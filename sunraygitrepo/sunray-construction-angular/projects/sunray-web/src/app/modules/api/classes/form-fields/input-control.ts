// Similar implementation to:
// https://angular.io/guide/dynamic-form

// type Input = InputBase | InputGroup
// //

import * as _ from 'lodash'

import {
  iInputControl,
  iInputControlOptions,
} from '../../interfaces'

let inputControlDefaults = {
  value: null,
  key: '',
  label: '',
  placeholder: '',
  validators: [],
  order: -1,
  row: null,
  controlType: '',
}

export class InputControl<T> implements iInputControl {
  value: T;
  key: string;
  label: string;
  placeholder: string;
  validators: any[];
  order: number;
  row: number;
  controlType: string;

  constructor(options: iInputControlOptions<T> = {}) {
    options = _.defaults(options, inputControlDefaults)
    _.forEach(options, _.bind(this.setAttribute, this))
  }

  private setAttribute(attributeValue, attributeName): void {
    this[attributeName] = attributeValue
  }
}
