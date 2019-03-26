import * as _ from 'lodash'

import {
  Component,
  OnInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
} from '@angular/core'

import {
  Mixin,
} from '@ceo/shared'

import {
  BasePage as ParentBasePage,
} from '@sunray-ui-app/modules/imports'

import {
  BaseComponent,
} from '../../components'

import {
  DataService,
  PageService,
} from '../../services'

@Component({
  templateUrl: './base.page.html',
})
export class BasePage extends BaseComponent
  implements AfterViewChecked, AfterViewInit, DoCheck {

  modalService: any
  inflectionService: any
  resourceFormFactory: any
  router: any
  route: any
  notificationService: any
  authService: any

  delegatedProperties: any = {
    pageService: [
      'modalService',
      'inflectionService',
      'resourceFormFactory',
      'router',
      'route',
      'authService',
    ]
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
  ) {
    super()
  }

  ngAfterViewInit() {
    this.log("ngAfterViewInit in Page")
  }

  ngAfterViewChecked() {
    this.log("ngAfterViewChecked in Page")
  }

  ngDoCheck() {
    this.log("ngDoCheck in Page")
  }

  log(message) {
    //console.log(message)
  }
}
