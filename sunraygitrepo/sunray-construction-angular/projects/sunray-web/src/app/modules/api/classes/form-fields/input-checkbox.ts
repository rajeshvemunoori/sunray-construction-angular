import { InputControl } from './input-control';

export class InputCheckbox extends InputControl<string> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
  }
}
