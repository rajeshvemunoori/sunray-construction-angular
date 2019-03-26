import { Component, OnInit } from '@angular/core';
import {
  InputComponent as SharedInputComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-account-company-edit-preference-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class PreferenceInputComponent extends SharedInputComponent {


  ngOnInit() {
  }

}
