
import {map} from 'rxjs/operators';
import * as _ from "lodash";

import { Observable } from 'rxjs';

import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DueDateComponent } from '../due-date/due-date.component';

@Component({
  selector: 'sunray-ui-app-dashboards-primary-panes',
  templateUrl: './primary-panes.component.html',
  styleUrls: ['./primary-panes.component.scss']
})
export class PrimaryPanesComponent implements OnInit {
  public currentPane:string = "summary";
  public closeResult: string;
  public dashboardType: string;
  public dueDateCount: 0;
  public isDueDateCount: Boolean;

  public standardDataPoints$: Observable<any>;
  public importantDataPoints$: Observable<any>;
  public qualityControlDataPoints$: Observable<any>;

  @Input()
  comments$: Observable<any[]>;

  @Input()
  router: string;

  @Input()
  activeDataPoint: any;

  @Input()
  dashboardDataPoints$: Observable<any>;

  @Input()
  dashboardDataPointTypes$: Observable<any>;

  @Input()
  dashboardDataPointItems$: Observable<any>;

  @Input()
  dashboardPerformances$: Observable<any>;

  @Output()
  selectEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  accountManagerEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.setCurrentPane("summary");
    this.dashboardDataPoints$.subscribe(_.bind(this.updateDatapoints, this));
    this.dashboardDataPointItems$.subscribe(_.bind(this.updateDashboardDataPointItems, this));
    this.dashboardDataPoints$.subscribe(data => this.calculateDueDateCount(data.entities));
  }

  getCurrentPane() {
    this.setCurrentPane(this.generateCurrentPane());
    return this.currentPane;
  }

  generateCurrentPane() {
    if(this.activeDataPoint == null) {
      return "summary";
    }
    else if(this.activeDataPoint.getAttr('name') == 'Average Request Per Day'){
      return "dashboard-performance";
    }
    else {
      //return this.activeDataPoint.paneType();
      return "project-requests";
    }
  }

  updateDashboardDataPointItems(data) {
    return data;
  }

  setCurrentPane(pane: string) {
    this.currentPane = pane;
  }

  updateDatapoints(dataPoints) {
    this.standardDataPoints$ = this.dashboardDataPoints$.pipe(
      map((dataPoints) => {
        return dataPoints.where({category: 'standard'})
      })
    )
    this.importantDataPoints$ = this.dashboardDataPoints$.pipe(
      map((dataPoints) => {
        return dataPoints.where({category: 'important'})
      })
    )
    this.qualityControlDataPoints$ = this.dashboardDataPoints$.pipe(
      map((dataPoints) => {
      return dataPoints.where({category: 'quality_control'})
    })
    )
  }

  calculateDueDateCount(data) {
    for (let entry of data) {
      if( entry.attributes.data_point_type_id === 3 ){
        this.dueDateCount = entry.attributes.value;
      }
    }
  }

  dueDatePresent() {
    if( this.dueDateCount >  0 ){
      return true;
    }
    else{
      return false;
    }
  }

  selectItem(event) {
    this.selectEmitter.emit(event);
    /*
     * THIS SHOULD BE HANDLED ELSEWHERE
    if($event.attributes.data_point_type_id === 1) {
      if(this.dueDatePresent()) {
        const modalRef = this.modalService.open(DueDateComponent);
        modalRef.componentInstance.dueDateCount = this.dueDateCount;
      }
    */
  }

  isCurrentPane(pane) {
    return this.currentPane == pane;
  }
}
