
import {zip as observableZip,  Observable } from 'rxjs';
import * as _ from "lodash";

import {
  Input, Component, OnInit,
  Output, EventEmitter }
from '@angular/core';

@Component({
  selector: 'sunray-ui-app-dashboards-data-points',
  templateUrl: './data-points.component.html',
  styleUrls: ['./data-points.component.scss']
})
export class DataPointsComponent implements OnInit {
  public dataPointTypes:any;

  @Input()
  collection$: Observable<any>;

  @Input()
  dashboardDataPointTypes$: Observable<any>;

  @Output()
  selectEmitter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.startDashboardDataSubscription()
  }

  startDashboardDataSubscription() {
    let observables = [this.collection$, this.dashboardDataPointTypes$];
    observableZip(...observables)
      .subscribe((result) => {this.setDataPointTypes(result[1])});
  }

  setDataPointTypes(collection) {
    this.dataPointTypes = collection;
  }

  select($event, item) {
    $event.stopPropagation()
    let event = {
      item: item
    }
    this.selectEmitter.emit(event)
  }

  themeConfig(item) {
    let dataPointType =
      this.dataPointTypes.find(item.getAttr("data-point-type-id"));

    return {
      component: "dashboard.page",
      conditions: { element_id: dataPointType.id, element_type: "DashboardDataPointType" },
      defaultThemeStyle: "brand-blue"
    }
  }
}

