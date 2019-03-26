import * as _ from 'lodash'

import {
  combineLatest as observableCombineLatest,
  Observable
} from 'rxjs'

import {
  startWith,
  map,
  mergeMap,
} from 'rxjs/operators'

import { Component, OnInit  }     from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl }            from '@angular/forms'

import { InflectionService }      from '@ceo/core'
import { iEntityCollection }       from '@ceo/entity'

import {
  BasePage,
  PageService,
} from '../imports'

import { DataService }            from './data.service'
import { noticeFeatures }         from './notice-features'

@Component({
  selector: 'sunray-ui-site-document-page',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
  providers: [DataService],
})
export class DocumentPage extends BasePage {
  stateControl: FormControl
  states$: Observable<iEntityCollection>
  filteredStates$: Observable<iEntityCollection>

  requestType$: Observable<any>
  requestTypeName$: Observable<string>

  requestType: any
  heading: any = ''
  subHeading: any = ''

  disabledStates: any = []
  features: any[] = noticeFeatures

  delegatedProperties: any = {
    dataService: ['requestType$', 'requestTypeStates$', 'filteredStates$']
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
  ) {
    super(pageService, dataService)
  }

  ngOnInit() {
    this.setAllDelegatedProperties()
    this.stateControl = new FormControl()
    this.filteredStates$ = this.dataService.filteredStates$(
      this.stateControl.valueChanges.pipe(startWith(''))
    )
  }

  onRegionSelect(region) {
    let regionName = this.pageService.kebabCase(region)
    let route = `/states/${regionName}`
    this.pageService.navigate([route])
  }
}
