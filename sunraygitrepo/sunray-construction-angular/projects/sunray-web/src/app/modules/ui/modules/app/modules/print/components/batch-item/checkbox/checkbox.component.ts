
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

import { Observable } from 'rxjs';

import {
  Input, Component, OnInit
} from '@angular/core';

import { BatchItemService }         from '../batch-item.service';

@Component({
  selector: 'sunray-ui-app-print-batch-item-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [BatchItemService],
})
export class CheckboxComponent implements OnInit {

  private childitem:Observable<any[]>;

  @Input()
  item: any;
  @Input()
  collection$: Observable<any>;

  constructor(
    private batchItemService: BatchItemService
  ) { }

  ngOnInit() { }

  children(){
    return this.batchItemService.getChildren(this.collection$, this.item);
  }

  updateSelection(item, checked){
    item.checked = checked;
    var currentObject = this;
    currentObject.collection$.pipe(map( collection => collection.children(item))).
      subscribe( collection => {
        _.forEach((collection.entities), function(batchItem){
          batchItem.checked = checked;
          currentObject.updateSelection(batchItem, checked);
        });
      });
  }
}
