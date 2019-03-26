
import {map, takeUntil} from 'rxjs/operators';
import * as _ from 'lodash';

import { Observable ,  Subject } from 'rxjs';
import { Store }      from '@ngrx/store';

import {
  Input, Output, Component, OnInit, EventEmitter
} from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { EntitySelectorService }    from '@ceo/entity';

@Component({
  selector: 'sunray-ui-app-print-batch-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private itemId: any;
  private item: any;

  private ngUnsubscribe: Subject<any> = new Subject();

  public rootItem$: Observable<any[]>;
  public collection$: Observable<any[]>;
  public batchItems$: Observable<any>;
  public entity$: Observable<any[]>;

  constructor(
    private store: Store<any>,
    private selectorService: EntitySelectorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.getRouteParams$().pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe((params) => this.launch(params));
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getRouteParams$() {
    return this.route.paramMap;
  }

  launch(routeParams) {
    this.itemId = routeParams.get('id');
    this.loadData();
    this.launchDetail();
  }

  loadData() {
    let selector = this.selectorService.getSelector('sunray.entities.printBatchesBatches.all');
    this.collection$ = this.store.select(selector);
  }

  launchDetail() {
    this.collection$.pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe((collection) => this.setItem(collection));
  }

  setItem(collection) {
    this.item = collection.find(this.itemId);
    if(this.item != null) {
      let payload = {
        entity: this.item
      };
      // @ts-ignore:
      //this.store.dispatch(new EntityActions.SetSelected(slices.PRINT_BATCH, payload));
      this.loadEntity();
    }
  }

  loadEntity() {
    // DEEPAK Check this selector.
    let selector = this.selectorService.getSelector(
      'sunray.entities.selectedPrintBatchesAll'
    );
    this.entity$ = this.store.select(selector);
    //this.entity$ = this.store.select(Selectors.selectSunrayPrintBatchesSelectedEntity);
    this.entity$.pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe((entity) => this.selectBatchItems(entity));
  }

  selectBatchItems(entity) {
    if(entity != null) {
      var selectedEntity = entity;
      let selector = this.selectorService.getSelector(
        'sunray.entities.printBatches.selectedPrintBatchItemsAll'
      );
      this.entity$ = this.store.select(selector);
      //this.batchItems$ = this.store.select(Selectors.selectSunrayPrintBatchesSelectedEntityPrintBatchItemsAll);
      this.setRootItem();
    }
  }

  setRootItem() {
    if(this.batchItems$ != null){
      this.rootItem$ = this.batchItems$.pipe(map( collection =>  collection.rootItem()));
    }
  }

  // This needs to be improved with better approach.
  getMsgClass(item) {
    if(item != null) {
      if(item.printed()) {
        return "green";
      } 
      else if(item.notPrinted()) {
        return "red";
      }
      else if(item.partiallyPrinted()) {
        return "orange";
      }
    }
    return "";
  }
}
