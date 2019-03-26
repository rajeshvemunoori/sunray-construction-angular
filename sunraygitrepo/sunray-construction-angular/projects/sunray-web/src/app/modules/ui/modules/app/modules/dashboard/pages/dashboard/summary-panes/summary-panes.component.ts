import { Observable } from 'rxjs';

import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'sunray-ui-app-dashboards-summary-panes',
  templateUrl: './summary-panes.component.html',
  styleUrls: ['./summary-panes.component.scss']
})
export class SummaryPanesComponent implements OnInit {
  @Input()
  dashboardDataPointTypes$: Observable<any>;

  @Input()
  qualityControlDataPoints$: Observable<any>;

  @Input()
  comments$: Observable<any[]>;

  @Output()
  selectEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  selectItem($event) {
    this.selectEmitter.emit($event);
  }

}
