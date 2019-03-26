import {
  Component, OnInit, Input
 } from '@angular/core';

import {
  FormComponent as SharedFormComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends SharedFormComponent {

  ngOnInit() {
    super.ngOnInit();
  }

  @Input() inputFlagButton : boolean
  @Input() inputButtonText : string

}
