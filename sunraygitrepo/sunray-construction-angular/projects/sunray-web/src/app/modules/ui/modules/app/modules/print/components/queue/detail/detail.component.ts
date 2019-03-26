
import {takeUntil} from 'rxjs/operators';
import { Observable ,  Subject } from 'rxjs';

import { Store }    from '@ngrx/store';

import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { NotificationService }  from '@ceo/shared';
import {
  EntitySelectorService,
  DataService,
  EntityActions,
  EntityRelationshipProvider,
} from '@ceo/entity'

@Component({
  selector: 'sunray-ui-app-print-queue-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private item: any;
  private itemId: any;
  private selectedEntity: any;
  public actionText: any;
  public collection$: Observable<any[]>;
  public entity$: Observable<any>;
  public elements$: Observable<any>;
  public doNotMailQueue$: Observable<any>;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private store: Store<any>,
    private dataService: DataService,
    private selectorService: EntitySelectorService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) {}

  ngOnInit() {
    this.getRouteParams$().pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe((params) => this.launch(params));
    this.loadDoNotMailQueue();
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
    let selector = this.selectorService.getSelector('sunray.entities.printQueuesQueues.all');
    this.collection$ = this.store.select(selector);
    /*
    let selectorName = "selectSunrayPrintQueuesAll";
    this.collection$ = this.store.select(Selectors[selectorName]);
    */
  }

  launchDetail() {
    this.collection$.pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe((collection) => this.setItem(collection));
  }

  loadDoNotMailQueue() {
    /*
     * DEEPAK: Find a way to handle DoNotMailQueues
    let selectorName = "selectSunrayPrintQueuesDoNotMailQueue";
    this.doNotMailQueue$ = this.store.select(Selectors[selectorName]);
    */
  }

  setItem(collection) {
    this.item = collection.find(this.itemId);
    if(this.item != null) {
      let load = {
          load: false
        }
      this.elements$ = this.entityRelationshipProvider.provide$(
        this.item,
        'print-queues-queue-elements',
        load
      )
    }
  }

  loadEntity() {
    let selector = this.selectorService.getSelector('sunray.entities.printQueuesQueues.all');
    this.collection$ = this.store.select(selector);
    /*
     * DEEPAK: Handle selected entity
    this.entity$ = this.store.select(Selectors.selectSunrayPrintQueuesSelectedEntity);
    this.entity$
      .takeUntil(this.ngUnsubscribe)
      .subscribe((entity) => this.selectQueueElements(entity));
     */
  }

  selectQueueElements(entity) {
    if(entity != null) {
      this.selectedEntity = entity;
      let selector = this.selectorService.getSelector(
        'sunray.entities.printQueuesQueues.selectedEntityPrintQueuesQueueElements.all'
      );
      this.elements$ = this.store.select(selector);
      //this.elements$ = this.store.select(Selectors.selectSunrayPrintQueuesSelectedEntityPrintQueueElementsAll);
    }
  }

  moveElements(element){
    this.doNotMailQueue$.pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe((queue) => this.updateElementQueue(queue, element));
    this.notificationService.showNotification(
      this.moveQueueElementNotificationMsg(element), "Dismiss", 5000
    );
  }

  moveQueueElementNotificationMsg(element){
    if(this.item.isDoNotMail()){
      return `Document #${element.id} sent to Queue!`;
    }else{
      return `Document #${element.id} sent to 'Do Not Mail' Queue!`;
    }
  }

  updateElementQueue(queue, element) {
    element.attributes["queue-id"] = this.queue_id(queue);
    /*
     * DEEPAK Check the reason for trigger post and update call together
    this.store.dispatch(new EntityActions.Add(slices.PRINT_QUEUE_ELEMENT, element));
    this.store.dispatch(
      // @ts-ignore:
      new EntityActions.Patch(slices.PRINT_QUEUE_ELEMENT, element)
    );
     */
  }

  queue_id(queue){
    if(this.selectedEntity.isDoNotMail()){
      return "";
    }
    else{
      return queue.id;
    }
  }

  moveElementParams(queue, entity) {
    /*
    let oldResult = {
      document_request_id: element.getAttr('work-order-id'),
      from_queue_id: element.id,
      to_queue_id: ""
    }
    return {
      entity: entity,
      queue_id: queue.id
    }
    */
  }
}
