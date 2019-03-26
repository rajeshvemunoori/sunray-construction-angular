import {
   Component, OnInit, Input
 } from '@angular/core';


import {
  FieldComponent as SharedFieldComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-account-company-edit-company-info-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent extends SharedFieldComponent {

  ngOnInit() {
  }
@Input() inputGroupFlag : boolean
}
