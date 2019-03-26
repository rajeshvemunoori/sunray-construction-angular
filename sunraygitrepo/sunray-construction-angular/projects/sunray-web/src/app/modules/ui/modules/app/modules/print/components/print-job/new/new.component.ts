
import * as _ from 'lodash';

import { Observable } from 'rxjs';
import { map }        from 'rxjs/operators'


import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

import { Store }      from '@ngrx/store';

import { DataService }          from '@ceo/entity';
import { EntitySelectorService }      from '@ceo/entity';
import { NotificationService }  from '@ceo/shared';

@Component({
  selector: 'sunray-ui-app-print-job-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  batchIds: any[];
  batchItems$: Observable<any>;
  rootItems$: Observable<any[]>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private dataService: DataService,
    private selectorService: EntitySelectorService,
  ) {}

  ngOnInit() {
    this.loadBatches();
    this.getQueryParams$()
      .subscribe((params) => this.setBatchIds(params));
    this.loadBatchItems();
  }

  private loadBatches(): void {
    //this.store.dispatch(new EntityActions.Load(slices.PRINT_BATCH));
    let resourceOpts = {
      feature: 'app',
      type: 'print-batches-batches',
    }
    this.dataService.get$(resourceOpts);
  }

  getQueryParams$() {
    return this.route.queryParamMap;
  }

  setBatchIds(routeParams) {
    var batchIds = routeParams.params.batchIds;
    if(batchIds instanceof Array){
      this.batchIds = _.
        map(routeParams.params.batchIds, function(batchId){
          return +batchId
        });
    }else{
      this.batchIds = [ +batchIds ];
    }
  }

  loadBatchItems() {
    var currentObject = this;
    let selector = this.selectorService.getSelector('sunray.entities.printBatchesBatchItems.all');
    this.batchItems$ = this.store.select(selector).pipe(
      map((collection) => collection.where({
        'batch-id': currentObject.batchIds 
      })));
    this.setRootItems();
    //let selectorName = "selectSunrayPrintBatchItemsAll"
    //this.batchItems$ = this.store.select(Selectors[selectorName]).
    //  map((collection) => collection.where({ 'batch-id': currentObject.batchIds }));
  }
    
  setRootItems() {
    this.rootItems$ = this.batchItems$.pipe(
      map( collection => collection.
        where({'batch-item-id': null})
      ));
  }

  private submit(): void {
    let resourceOpts = {
      feature: "app",
      type: 'print-print-jobs-print-jobs',
      data: this.printJobParams(),
    }

    this.dataService.create$(resourceOpts);
    /*
    this.store.dispatch(
      // @ts-ignore:
      new EntityActions.Add(slices.PRINT_JOB, this.printJobParams())
    );
     */
    console.log(this.printJobParams());
    this.notificationService.showNotification(
      "Batch items are successfuly printed!", "Dismiss", 5000
    );
  }

  private printJobParams() {
    return { printable_ids: this.selectedItems() };
  }

  private selectedItems() {
    var selectedItems = [];
    this.batchItems$.subscribe(collection => {
      if(collection.entities.length>0) {
          _.forEach((collection.entities),function(batchItem){
            if(batchItem.checked && !batchItem.getAttr('printed-at')) {
              selectedItems.push(batchItem.getAttr('printable-id'))
            }
          });
        }
        else { 
          console.log("collection of print id's is", selectedItems);
        }
    });
    return selectedItems;
  }
}
