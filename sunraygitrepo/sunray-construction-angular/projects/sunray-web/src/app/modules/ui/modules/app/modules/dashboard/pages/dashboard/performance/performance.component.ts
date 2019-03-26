import * as _ from "lodash";

import { Observable } from 'rxjs';

import {
  Component, OnInit, Input,
} from '@angular/core';

@Component({
  selector: 'sunray-ui-app-dashboards-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']

})
export class PerformanceComponent implements OnInit {
  @Input()
  collection$: Observable<any>;

  constructor() { }

  ngOnInit() { }
}
