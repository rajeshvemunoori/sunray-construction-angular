import * as _ from 'lodash';

import { Observable } from 'rxjs';

import {
  Input, Component, OnInit
} from '@angular/core';

@Component({
  selector: 'sunray-ui-app-print-batch-item',
  templateUrl: './batch-item.component.html',
  styleUrls: ['./batch-item.component.scss']
})
export class BatchItemComponent implements OnInit {
  @Input()
  public rootItem: any;
  @Input()
  public batchItems$: Observable<any>;

  constructor() { }

  ngOnInit(){
    this.addCheckedAttr();
  }

  addCheckedAttr(){
    this.batchItems$.subscribe( collection => {
      _.forEach((collection.entities),function(batchItem){
        if(batchItem.getAttr('printed-at')) {
          batchItem.checked = true;
        }
        else{
          batchItem.checked = false;
        }
      });
    });
  }
}
