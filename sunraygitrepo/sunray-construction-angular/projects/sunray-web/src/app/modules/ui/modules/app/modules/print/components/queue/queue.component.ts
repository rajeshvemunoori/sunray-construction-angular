import * as _                         from 'lodash';

import { Observable }                 from 'rxjs';

import { Component, OnInit }   from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';

import { Store } from '@ngrx/store';

import { DataService } from '@ceo/entity';

@Component({
  selector: 'sunray-ui-app-print-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  public collection$: Observable<any[]>;

  constructor(
    private store: Store<any>,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.loadCollection();
  }

  loadCollection(): void {
    //this.store.dispatch(new EntityActions.Load(slices.PRINT_QUEUE));
    let resourceOpts = {
      feature: 'app',
      type: 'print-queues-queues'
    }
    this.dataService.get$(resourceOpts);
  }

  /*
  showItemDetails(item) {
    //this.activeItemElements = item.getQueueElements();
    this.activeItem = item;
    this.actionText = item.getActionText();
    this.store.select(Selectors.selectSunrayPrintQueueElementsAll)
      .subscribe((items) => this.setActiveItemElements(items));
  }

  setActiveItemElements(items) {
    this.activeItemElements = items;
  }
  */
}
