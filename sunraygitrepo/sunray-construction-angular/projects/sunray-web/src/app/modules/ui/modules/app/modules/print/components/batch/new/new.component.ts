import * as _ from 'lodash';

import { 
  Directive, Component, OnInit, Input 
} from '@angular/core';
import {
  FormsModule, NgForm, NG_ASYNC_VALIDATORS,
  Validator, FormControl, ValidationErrors
} from '@angular/forms';
import { 
  ActivatedRoute, Router 
} from '@angular/router';

import { Store }          from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService }        from '@ceo/entity';
import { EntitySelectorService }    from '@ceo/entity';
import { NotificationService } from '@ceo/shared';


@Component({
  selector: 'sunray-ui-app-print-batch-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  name: string = '';
  activeQueues: boolean = true;
  batchCreated: boolean = false;

  @Input()
  selectedQueues: any[];

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private activeModal: NgbActiveModal,
    private notificationService: NotificationService,
    private selectorService: EntitySelectorService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    _.isEmpty(this.selectedQueues) ? this.activeQueues = true : this.activeQueues = false
  }

  onSubmit(formData: NgForm){
    this.createBatch(this.batchParams);
    setTimeout(() => {
      this.loadQueues();
    }, 300);
    this.notificationService.showNotification(
      "Batch created! Not yet ready for printing.", "Dismiss", 5000
    );
  }

  createBatch(params){
    let resourceOpts = {
      feature: 'app',
      type: 'print-batches-batches',
      data: params
    }
    this.dataService.create$(resourceOpts);
      /*
    this.store.dispatch(
      // @ts-ignore:
      //new EntityActions.Add(slices.PRINT_BATCH, params)
    );
       */
    this.batchCreated = true;

  }

  batchParams(){
    return { queue_ids: this.queueIds() };
  }

  loadQueues(){
    //this.store.dispatch(new EntityActions.Load(slices.PRINT_QUEUE)); 
    let resourceOpts = {
      feature: 'app',
      type: 'print-queues-queues',
    }
    this.dataService.get$(resourceOpts); 
  }

  queueIds(){
    return _.map(this.selectedQueues, 
      function(queue){ 
        return queue.id 
      });
  }

  closeModalWindow(){
    this.activeModal.close('Form submit');
  }

  goToBatches(){
    this.router.navigate(
      ['/app/print/batches'], 
      { queryParams: { status: 'Not Ready for Printing' } }
    );
    this.closeModalWindow();
  }
  
  validateStyle(control){
    return control.valid ? null : "border-red"
  }
  
}

  /*
@Directive({
  selector: '[uniqueName]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueNameValidatorDirective, multi: true}]
})
export class UniqueNameValidatorDirective implements Validator {
  
  constructor(
    private store: Store<any>
  ) { 
    this.store.dispatch(new EntityActions.Load(slices.PRINT_BATCH));
  }
  
  uniqueBatch(name: string){
    let valid: any;
    this.store.select(Selectors.selectSunrayPrintBatchesAll).subscribe(res => {
       valid = _.includes(_.map(res.entities, (entity) => entity.attributes.name), name)
    });
    return valid;
  }
  
  validate(c: FormControl): ValidationErrors {
    const message = {
      'batchName': {
        'message': 'The name is not unique'
      }
    };

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.uniqueBatch(c.value) ? message : null);
      }, 1000);
    });
  }
}
   */
