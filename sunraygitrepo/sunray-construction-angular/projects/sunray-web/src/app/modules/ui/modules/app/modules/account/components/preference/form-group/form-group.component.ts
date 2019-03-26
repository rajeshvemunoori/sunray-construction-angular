import {
  Component, OnInit, Input
} from '@angular/core';
import {
  FormGroupComponent as SharedFormGroupComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-account-company-edit-preference-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class PreferenceFormGroupComponent extends SharedFormGroupComponent {

  ngOnInit() {
  }
  // @Input() inputFlagButton : boolean
  // @Input() inputButtonText: string


}
