import * as _ from "lodash";

import { Observable } from 'rxjs';

import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';

@Component({
    selector: 'sunray-ui-app-dashboards-dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['dropdown.component.scss']
})
export class DropdownComponent {
  public nameId: string;

  @Input()
  collection: any[];

  @Output()
  selectEmitter: EventEmitter<any> = new EventEmitter<any>();


  selectName($event){
    $event.stopPropagation();
    this.selectEmitter.emit(this.nameId);
  }

}
