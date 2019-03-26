import { Observable } from 'rxjs'

import { InputControl } from './input-control';

export class InputDropdown extends InputControl<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || this.emptyDropdown() //eg. [{key: 1, value: "Test1"}]
  }

  private emptyDropdown() {
    return new Observable((observer) => {
    observer.next([])
    observer.complete()
    })
  }
}
