import {
  Component, OnInit, Input
} from '@angular/core';
import {
  FormGroupComponent as SharedFormGroupComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-shared-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent extends SharedFormGroupComponent {

  ngOnInit() {
  }

}
