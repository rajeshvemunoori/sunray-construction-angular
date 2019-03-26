import {
  Component, OnInit, Input
} from '@angular/core';
import {
  FormGroupComponent as SharedFormGroupComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-account-company-edit-company-info-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent extends SharedFormGroupComponent {

  @Input() inputGroupFlag : boolean

  buttonEnable(input) {
    if(input.name === "Billing Address Attributes") {
      return true
    }
  }
}
