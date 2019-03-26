import * as _ from "lodash";

import { Observable } from 'rxjs';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router }                               from '@angular/router';

import { Store } from '@ngrx/store';

import { EntitySelectorService }           from '@ceo/entity'
import {
  EntityActions,
  EntityRelationshipProvider,
  iEntity,
  iEntityCollection,
} from '@ceo/entity'

import { BasePage } from '../../../imports';

import { DataService }   from './data.service';

@Component({
  selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    DataService,
  ],
})
export class DashboardPage implements OnInit {
  public breadcrumbs: any[];
  public pageTitle: string;
  public pageSubtitle: string;
  public currentPane: string;
  public dashboardType: string = null;
  public nameId: Number;
  public currentUrl: String;
  public userAccount: any;
  public dashboardDataPointContexts: any;
  public dashboardDataPointContext: any;
  public dashboardDataPointTypes: any;
  public dashboardDataPoints: any;
  public activeDataPoint: any;

  public projectRequests$: Observable<any[]>;
  public comments$: Observable<any[]>;

  ///public accountManagers: any[];
  ///public dashboardPerformances$: Observable<any>;


  private dataServicePropertyNames = [
    'dashboardDataPointTypes$',
    'userAccount$',
    'dashboardDataPointContexts$',
    'dashboardDataPointContext$',
    'dashboardDataPoints$',
  ]

  private dashboardDataPointContexts$: Observable<iEntityCollection>
  private dashboardDataPointContext$: Observable<iEntity>
  private dashboardDataPoints$: Observable<iEntityCollection>
  private dashboardDataPointItems$: Observable<iEntityCollection>
  private dashboardDataPointTypes$: Observable<iEntityCollection>
  private userAccount$: Observable<iEntity>

  constructor(
    private store: Store<any>,
    private dataService: DataService,
    private selectorService: EntitySelectorService,
    private router: Router,
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) {}

  ngOnInit() {
    //this.loadUserAccount();
    //this.loadDashboardDataPointItems();
    //this.pageTitle = "Dashboard";
    //this.pageSubtitle = "Good morning, Nicole!";
    //this.setBreadcrumbs();

    this.setDataServiceProperties()
    this.setDashboardType()
  }

  private setDataServiceProperties() {
    let setDataServiceProperty = (propertyName) => {
      console.log("Going to set the " + propertyName)
      this[propertyName] = this.dataService[propertyName]
    }
    _.map(this.dataServicePropertyNames, setDataServiceProperty)
  }

  setDashboardType() {
    this.dashboardType = 'customer' //this.dashboardDataPointContext.getDashboardType();
  }

  isLaunched() {
    return !_.isNil(this.dashboardType)
  }

  isDashboardType(dashboardType) {
    return this.dashboardType == dashboardType;
  }

  onDataPointSelect(event) {
    let entity = event.item
    this.setActiveDataPoint(entity);
    let id = entity.id;
    this.dashboardDataPointItems$ = this.dataService.dashboardDataPointItems$(entity)
  }

  setActiveDataPoint(dataPoint) {
    this.activeDataPoint = dataPoint;
  }

  /*
  loadUserAccount() {
    let selector = this.selectorService.getSelector('sunray.entities.userAccounts.selectedEntity')
    this.store.select(selector)
      .subscribe(_.bind(this.setUserAccount, this))
  }

  loadDashboardDataPointItems(): void {
    let selector = this.selectorService.getSelector('sunray.entities.documentRequests.all');
    this.dashboardDataPointItems$ = this.store.select(selector)
  }

  setUserAccount(userAccount) {
    this.userAccount = userAccount;
    this.loadDashboardDataPointContexts();
  }

  loadDashboardDataPointContexts() {
    let resourceOpts = {
      feature: 'app',
      type: 'dashboards-data-points-contexts'
    }
    this.dashboardDataPointContexts$ = this.dataService.get$(resourceOpts);

    this.dashboardDataPointContexts$
      .subscribe((collection) => {
        return this.setDashboardDataPointContexts(collection)
      });
  }

  setDashboardDataPointContexts(contexts:any) {
    if(contexts.length > 0) {
      this.dashboardDataPointContexts = contexts;
      this.dashboardDataPointContext =
        this.dashboardDataPointContexts
          .find(
            // @ts-ignore:
            this.userAccount.getAttr("primary-dashboard-data-point-context-id")
          );
      if(!_.isEmpty(this.dashboardDataPointContext)) {
        this.loadDashboardData();
      }
    }
  }

  loadDashboardData() {
    this.loadDataPoints();
    this.loadDataPointTypes();
    this.loadCustomData();
  }

  loadDataPoints() {
    //this.setDashboardPerformance();
    let load = {
        load: false
      }
    this.dashboardDataPoints$ = this.entityRelationshipProvider.provide$(
      this.dashboardDataPointContext,
      'data-points',
      load
    )
    this.dashboardDataPoints$
      .subscribe((collection) => this.setDashboardDataPoints(collection));
  }

  loadDataPointTypes(): void {
    let resourceOpts = {
      feature: 'app',
      type: 'dashboards-data-point-types'
    }
    this.dashboardDataPointTypes$ = this.dataService.get$(resourceOpts);
    this.dashboardDataPointTypes$
      .subscribe((collection) => this.setDashboardDataPointTypes(collection));
  }

  loadCustomData() {
    this.loadAccountManagers();
  }

  loadAccountManagers(): void {
    this.accountManagers = this.dashboardDataPointContexts.where({'resource-type': 'SunrayEmployee'})
      // this.accountManagers = this.dashboardDataPointContexts.getAccountManagerContexts();
    //let resourceOpts = {
    //  feature: 'app',
    //  type: 'account-managers'
    //}
    //this.accountManagers$ = this.dataService.get$(resourceOpts);
    //// this.store.dispatch(new EntityActions.Load(slices.ACCOUNT_MANAGER));
    //// this.accountManagers$ = this.store.select(Selectors.selectSunrayAccountManagersAll);
  }


  setDashboardDataPoints(collection): void {
    console.log("Setting the data Points");
    this.dashboardDataPoints = collection;
    this.launchDashboard();
  }

  setDashboardDataPointTypes(collection): void {
    console.log("Setting the data Points type");
    this.dashboardDataPointTypes = collection;
    this.launchDashboard();
  }

  launchDashboard() {
    if(this.readyToLaunch()) {
      this.setDashboardType();
    }
  }

  readyToLaunch() {
    return (this.hasDataPoints() && this.hasDataPointTypes());
  }

  hasDataPoints() {
    return (this.dashboardDataPoints.length > 0);
  }

  hasDataPointTypes() {
    return (this.dashboardDataPointTypes.length > 0);
  }

  loadComments(): void {
    let resourceOpts = {
      feature: 'app',
      type: 'comments'
    }
    this.comments$ = this.dataService.get$(resourceOpts);
    //this.store.dispatch(new EntityActions.Load(slices.COMMENT));
    //this.comments$ = this.store.select(Selectors.selectSunrayCommentsAll);
  }

  setBreadcrumbs() {
    this.breadcrumbs = [
      {
        displayValue: 'Account Manager',
        url: 'account-managers'
      },
      {
        displayValue: 'Dashboard',
        url: 'account-managers'
      },
      {
        displayValue: 'Total Work Orders',
        url: 'account-managers'
      }
    ];
  }

  updateDatapointItem(object) {
    if(!_.isEmpty(object)) {
      this.onDataPointSelect(object);
    }
  }

  onDataPointSelect(dataPoint) {
    this.setActiveDataPoint(dataPoint);
    let id = dataPoint.id;
    let resourceOpts = {
      feature: 'app',
      type: 'document-requests',
      id: id
    }
    this.dataService.get$(resourceOpts);
  }

  setActiveDataPoint(dataPoint) {
    this.activeDataPoint = dataPoint;
  }

  selectName($event) {
    if($event!= ''){
      this.dashboardDataPointContext =
        this.dashboardDataPointContexts.find($event);
    }
    this.loadDataPoints();
  }

  onBreadcrumbSelect(breadcrumb) {
    this.setActiveDataPoint(null);
  }

  // Check the data again
  loadDashboardPerformance(id) {
    this.loadAccountManagers();
    //this.loadDashboardAccountManager(id);
    //this.setDashboardPerformance();
  }

  getPerformanceResourceID(){
    if(this.dashboardDataPointContext.getAttr('resource-type') == "SunrayEmployeeRole"){
      return "";
    }
    else{
      return this.dashboardDataPointContext.getAttr('resource-id');
    }
  }

  setDashboardPerformance() {
    let id = this.getPerformanceResourceID();
    let resourceOpts = {
      feature: 'app',
      type: 'dashboards-performance-items',
      filter: {
        'account-manager-id': id
      },
    }
    this.dashboardPerformances$ = this.dataService.get$(resourceOpts);
  }

  onAccountManagerSelect(id) {
    this.loadDashboardPerformance(id);
  }
  */
}
