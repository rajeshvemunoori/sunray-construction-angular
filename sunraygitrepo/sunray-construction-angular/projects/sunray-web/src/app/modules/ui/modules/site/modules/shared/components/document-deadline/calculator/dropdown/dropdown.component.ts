import {
  Component, OnInit, Input, Output
} from '@angular/core';

import { SunrayEntity }   from '@sunray-api';

import { BaseComponent }  from '../../../../imports';

@Component({
  selector: 'sunray-site-document-deadline-calculator-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends BaseComponent {
  @Input()
  dropdownItems: any;

  @Input()
  displayText: string;

  changeDisplayText(selectedValue) {
    this.displayText = selectedValue;
  }
}
