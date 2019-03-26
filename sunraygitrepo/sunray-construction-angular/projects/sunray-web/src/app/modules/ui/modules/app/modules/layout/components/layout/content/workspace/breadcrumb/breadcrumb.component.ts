import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { BaseComponent } from '../../../../imports'

@Component({
  selector: 'sunray-ui-app-layout-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends BaseComponent {
  @Input()
  breadcrumbs: any[] = [
    {
      url: '/app',
      displayValue: 'Supervisor'
    },
    {
      url: '/app/dashboard',
      displayValue: 'Dashboard'
    },
  ]

  @Output()
  selectEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super()
  }

  select(item) {
    this.selectEmitter.emit(item);
  }
}
