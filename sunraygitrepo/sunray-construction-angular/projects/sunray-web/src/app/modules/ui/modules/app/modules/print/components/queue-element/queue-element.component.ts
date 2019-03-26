import * as _ from "lodash";

import { Observable } from 'rxjs';

import { 
  Input, Output, Component,
  OnInit, EventEmitter }
from '@angular/core';

@Component({
  selector: 'sunray-ui-app-print-queue-element',
  templateUrl: './queue-element.component.html',
  styleUrls: ['./queue-element.component.scss']
})
export class QueueElementComponent implements OnInit {
  @Input()
  collection$: Observable<any[]>;

  @Input()
  actionText: string;

  @Output()
  selectEmitter: EventEmitter<any> = new EventEmitter<any>();

  public attrNames: Array<string>;
  public tableHeaders: Array<string>;

  constructor() { }

  ngOnInit() {
    this.setTableHeaders();
  }

  setTableHeaders(): void {
    this.attrNames = [
      "correspondence-id",
      "created-date",
      "work-order-id",
      ];

    let sanitizedAttrName = function(attrName) {
      return _.startCase(attrName);
    };

    this.tableHeaders = _.map(this.attrNames, sanitizedAttrName);
  }

  selectQueueElement(element): void {
    this.selectEmitter.emit(element);
  }
}
