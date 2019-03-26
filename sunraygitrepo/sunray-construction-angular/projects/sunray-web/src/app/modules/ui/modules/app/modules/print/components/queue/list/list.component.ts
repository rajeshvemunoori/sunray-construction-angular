import * as _ from 'lodash';

import { Observable } from 'rxjs';

import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

import { NgbModal, NgbActiveModal }   from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';

import { EntitySelectorService }  from '@ceo/entity';

import * as batches from '../../batch/index';

@Component({
  selector: 'sunray-ui-app-print-queue-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //private cardStyles: any[];
  private activeItems: any[] = [];
  public collection$: Observable<any[]>;

  constructor(
    private store: Store<any>,
    private selectorService: EntitySelectorService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectCollection();
    this.updateActiveItems();
  }

  updateActiveItems(){
    this.collection$.subscribe( () => {
      this.activeItems = [];
    });
  }

  selectCollection() {
    /*
    let selectorName = "selectSunrayPrintQueuesAll";
    this.collection$ = this.store.select(Selectors[selectorName]);
     */
    let selector = this.selectorService.getSelector('sunray.entities.printQueuesQueues.all');
    this.collection$ = this.store.select(selector);
  }

  cardStyle(item) {
    //let id = item.id;
    //let index = id % this.cardStyles.length;
    //return this.cardStyles[index];
    return "brand-blue";
  }

  toggleItemActive($event, item) {
    $event.stopPropagation();
    if(item.getAttr("number-of-elements") != 0){
      this.toggleItem(item)
    }
  }

  toggleItem(item){
    if (this.isItemActive(item) || this.isDoNotMail(item)) {
      this.activeItems = _.without(this.activeItems, item);
    }
    else {
      this.activeItems = this.activeItems.concat([item]);
    }
  }

  isItemActive(item) {
    return _.includes(this.activeItems, item);
  }

  isDoNotMail(item){
    return item.isDoNotMail();
  }

  checkboxStyle(item) {
    if (this.isItemActive(item)) {
      return 'active';
    }
    else {
      return 'inactive';
    }
  }

  isItemsSelected(){
    return !_.isEmpty(this.activeItems);
  }

  select(item) {
    if(item.getAttr("number-of-elements") != 0){
      this.router.navigate(['./' + item.id], { relativeTo: this.route });
    }
  }
    /*
  createBatch(){
    this.createBatchEmitter.emit(this.activeItems);
  }*/

  createBatch(){
    const modalRef = this.modalService.open(batches.NewComponent);
    modalRef.componentInstance.selectedQueues = this.activeItems;
  }

}
