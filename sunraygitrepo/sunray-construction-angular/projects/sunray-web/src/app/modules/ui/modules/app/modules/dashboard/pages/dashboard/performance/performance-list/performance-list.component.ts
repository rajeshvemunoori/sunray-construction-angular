import * as _ from "lodash";

import { Observable } from 'rxjs';

import {
  Component, OnInit, Input,
} from '@angular/core';

@Component({
  selector: 'sunray-ui-app-dashboards-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.scss']
})

export class PerformanceListComponent implements OnInit {
  private cardStyles:any[];

  @Input()
  cardHeader: String;

  @Input()
  collection$: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.buildCardStyles();
  }
  buildCardStyles() {
    this.cardStyles = [
      'brand-blue',
      'brand-teal',
      'brand-salmon',
      'brand-green',
      'brand-pink'
    ];
  }

  cardStyle(item) {
    let id = item;
    let index = id % this.cardStyles.length;
    return this.cardStyles[index];
  }

  keysFor(data){
    return Object.keys(data);
  }
}
