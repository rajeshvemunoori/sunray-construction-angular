import * as _ from 'lodash';

import { Observable } from 'rxjs';
import { Store }      from '@ngrx/store';

import { 
  Component, OnInit 
} from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

import { DataService }        from '@ceo/entity';

@Component({
  selector: 'sunray-ui-app-print-batch-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public collection$: Observable<any[]>;
  listItems: any[];

  public status: string = "Pending";
  public statuses: any[] = ["Not Ready for Printing", "Pending", "In Progress", "Completed"];

  private cardStyles: any[];
  private activeItems: any[] = [];

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.buildCardStyles();
    this.ensureStatus();
  }

  private ensureStatus () {
    this.route.queryParams.subscribe(params => {
      if(params["status"] == null) {
        this.redirectToDefaultStatus();
      }
      else {
        this.status = params["status"];
        this.loadCollection();
      }
    });
  }

  private redirectToDefaultStatus() {
    this.router.navigate([this.router.url], {queryParams: {status: this.status}});
  }

  private loadCollection(): void {
    let resourceOpts = {
      feature: 'app',
      type: 'print-batches-batches',
      filter: {
        status: this.status
      }
    }
    this.collection$ = this.dataService.get$(resourceOpts);
  }

  buildCardStyles() {
    this.cardStyles = [
      'brand-blue',
      'brand-teal',
      'brand-salmon',
      'brand-green',
      'brand-pink'
    ];
  }

  cardStyle(item) {
    let id = item.id;
    let index = id % this.cardStyles.length;
    return this.cardStyles[index];
  }

  showPrintButton() {
    return this.status == 'Pending' || this.status == 'In Progress';
  }

  submit() {
    if(this.selectedBatchIds().length != 0){
      this.router.navigate(
        ['/app/print/print-jobs/new'],
        { queryParams: { batchIds: this.selectedBatchIds() } }
      );
    }
  }

  selectedBatchIds() {
    return _.map(this.activeItems, this.entityId);
  }

  entityId(entity) {
    return entity.id;
  }

  updateActiveItems(items) {
    this.activeItems = items;
  }
}
