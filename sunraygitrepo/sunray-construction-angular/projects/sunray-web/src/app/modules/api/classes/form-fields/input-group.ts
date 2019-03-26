import * as _ from 'lodash'

import {
  iInputGroup,
  InputType,
} from '../../interfaces'

export class InputGroup implements iInputGroup {
  key: string
  inputs: InputType[]
  name: string

  constructor(inputs: InputType[], key: string) {
    this.inputs = inputs
    this.key = key 
    this.name = _.startCase(key)
  }

  // Create an iterator for EntityTypeCollection
  // Allows us to use the collections in angular directives
  // (i.e. ngFor, etc)
  [Symbol.iterator]() {
    let current = 0
    let items = this.inputs;
    return  {
      next: function () {
        let isEmpty = _.isEmpty(items);
        let value = isEmpty ? null : items[current++];
        let done = isEmpty ? true : current > items.length;
        return {
          value: value,
          done: done
        };
      }
    }
  }
}
