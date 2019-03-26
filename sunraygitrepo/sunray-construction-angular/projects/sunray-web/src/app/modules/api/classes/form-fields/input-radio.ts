import { InputControl } from './input-control'

export class InputRadio extends InputControl<string> {
  controlType = 'radio'
  type: string

  constructor(options: {} = {}) {
    super(options)
    this.options = options['options'] || this.emptyOptions() //eg. [{key: 1, value: "Test1"}]
  }

  emptyOptions() {
    return []
  }
}
