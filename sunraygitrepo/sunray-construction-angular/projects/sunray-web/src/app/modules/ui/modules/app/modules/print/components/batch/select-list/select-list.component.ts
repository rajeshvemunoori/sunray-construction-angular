import * as _ from 'lodash';

import { Observable } from 'rxjs';

import {
  Input, Output, Component,
  OnInit, EventEmitter
} from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';


@Component({
  selector: 'sunray-ui-app-print-batch-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {
  private activeItems: any[] = [];

  @Input()
  collection$: Observable<any[]>;

  @Output()
  itemEmitter: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  select(item) {
    this.router.navigate(['./' + item.id], { relativeTo: this.route });
  }

  themeConfig(item) {
    return {
      component: "print.batch.list.component",
      conditions: { element_type: item.sliceName },
      defaultThemeStyle: "brand-green"
    }
  }

  toggleItemActive($event, item) {
    $event.stopPropagation();

    let isActive = this.isItemActive(item);

    if (isActive) {
      this.deactivateItem(item);
    }
    else {
      this.activateItem(item);
    }
  }

  activateItem(item) {
    this.activeItems = this.activeItems.concat([item]);
    this.itemEmitter.emit(this.activeItems);
  }

  deactivateItem(item) {
    this.activeItems = _.without(this.activeItems, item);
    this.itemEmitter.emit(this.activeItems);
  }

  isItemActive(item) {
    return _.includes(this.activeItems, item);
  }

  checkboxStyle(item) {
    if (this.isItemActive(item)) {
      return 'active';
    }
    else {
      return 'inactive';
    }
  }
}
