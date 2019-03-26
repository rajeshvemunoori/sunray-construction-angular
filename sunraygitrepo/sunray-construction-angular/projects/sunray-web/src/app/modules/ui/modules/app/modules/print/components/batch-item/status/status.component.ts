import * as _ from 'lodash';

import { Observable } from 'rxjs';

import {
  Input, Component, OnInit
} from '@angular/core';

import { BatchItemService }  from '../batch-item.service';

@Component({
  selector: 'sunray-ui-app-print-batch-item-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  providers: [BatchItemService],
})
export class StatusComponent {
  
  @Input()
  item: any;
  @Input()
  collection$: Observable<any[]>;

  constructor(
    private batchItemService: BatchItemService
  ) { }

  ngOnInit() {

  }

  children() {
    return this.batchItemService.getChildren(this.collection$, this.item);
  }

  getMsgClass(item) {
    if(item.printed()) {
      return "green";
    } 
    else if(item.notPrinted()) {
      return "red";
    }
    else if(item.partiallyPrinted()) {
      return "orange";
    }
    else {
      return "";
    }
  }

  themeConfig(item) {
    return {
      component: "status.component",
      conditions: { element_id: item.printStatus(), element_type: "BatchItemPrintStatus" },
      defaultThemeStyle: ""
    }
  }
}
