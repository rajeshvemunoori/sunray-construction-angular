import { Component, OnInit }                     from '@angular/core'
import { Observable }                            from 'rxjs'
import { ActivatedRoute, Router, Params, Data }  from '@angular/router'

import * as moment                               from 'moment'
import { NgbDateAdapter, NgbDateStruct }         from '@ng-bootstrap/ng-bootstrap'

import { InflectionService }                     from '@ceo/core'
import { NgbDateNativeAdapter }                  from '@ceo/shared'

import {
  BasePage,
  PageService,
} from '../../imports'

import { DataService } from './data.service'

@Component({
  selector: 'sunray-site-webinar-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DataService],
})
export class ListComponent extends BasePage {
  collection$: Observable<any>
  recordedWebinars: any[]

  startPage: Number = 0
  paginationLimit: Number = 3
  testimonialHeading: any = "Thousands of Users can't be wrong"
  term: any = 'webinars'
  selectedState: string = ''

  documentRequests: any[] = [
    { "id": 1, "name": "Get Paid" },
    { "id": 2, "name": "Suit On Bond" },
    { "id": 3, "name": "Foreclosure" },
    { "id": 4, "name": "Liens" },
    { "id": 5, "name": "Contracts" },
    { "id": 6, "name": "Notice To Owner" },
    { "id": 7, "name": "Waivers And Releases" },
    { "id": 8, "name": "Claim On Bonds" },
    { "id": 9, "name": "Commercial Collections" },
    { "id": 10, "name": "Change Orders" }
  ]

  /*
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private dateAdapter: NgbDateNativeAdapter,
    private inflectionService: InflectionService,
    private dataService: DataService,
    private selectorService: SelectorService,
  ) {
    super()
  }
  */


  delegatedProperties: any = {
    pageService: ['formatDate'],
    dataService: ['states$', 'cmsTestimonials$', 'recordedWebinars$', 'webinars$'],
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
  ) {
    super(pageService, dataService)
  }

  getRecordedWebinars$() {
    let resourceOpts = {
      feature: "cms",
      type: "recorded-webinars",
      filter: {
        category: this.selectedState
      }
    }
    return this.dataService.get$(resourceOpts)
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3
  }

  showLessItems() {
    this.paginationLimit = Number(this.paginationLimit) - 3
  }

  onStateSelected(stateName) {
    let slug = this.inflectionService.kebabCase(stateName)
  }

  dateDisplay(date): string {
    return this.formatDate(date)
  }

  timeFormat(time): string{
    var webinarTime = moment.utc(time, 'hh:mm').format('h:mm A')
    return webinarTime
  }

  waitingPeriod(date): string {
    let webinarDate: moment.Moment = moment(date)
    let toDay: moment.Moment = moment(Date.now())
    return toDay.from(webinarDate, true)
  }
}
