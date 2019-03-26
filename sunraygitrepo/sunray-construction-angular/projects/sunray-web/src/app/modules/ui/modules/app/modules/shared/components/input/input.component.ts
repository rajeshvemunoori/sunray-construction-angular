import { Component, OnInit } from '@angular/core';
import {
  InputComponent as SharedInputComponent,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends SharedInputComponent {


  ngOnInit() {
  }

}
