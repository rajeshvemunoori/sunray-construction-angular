import {
  Component, OnInit, Input
 } from '@angular/core';

import {
  FormComponent as SharedFormComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-account-company-edit-preference-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class PreferenceFormComponent extends SharedFormComponent {

  ngOnInit() {
    super.ngOnInit();
  }
}
