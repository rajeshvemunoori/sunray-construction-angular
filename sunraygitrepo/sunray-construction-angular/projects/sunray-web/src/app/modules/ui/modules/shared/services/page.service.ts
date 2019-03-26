// Service that can provide and
// application/ui related functionality to the page.
import * as _ from 'lodash'

import { Injectable } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router'

import { NgbModal, NgbActiveModal }   from '@ng-bootstrap/ng-bootstrap'

import { InflectionService }      from '@ceo/core'

import {
  AuthService,
  Mixin,
  PropertyDelegator,
} from '@ceo/shared'

import {
  Config,
  LogService,
} from '@ceo/core'

import {
  AnalyticsService,
} from '@ceo/analytics'

import { ResourceFormFactory }      from '@sunray-api'

import { AppService }                  from './app.service'
import { DataService }                 from './data.service'
import { UiService }                   from './ui.service'

@Injectable()
@Mixin([PropertyDelegator])
export class PageService implements PropertyDelegator {
  public delegatedProperties = {
    appService: [
      'logger','kebabCase', 'navigate', 'route', 'userSignedIn',
      'signOutUser', 'routerNavigationStart$',
      'customElementManager', 'customElementFactory',
      'defineCustomElement', 'buildCustomElement',
      'router', 'url', 'ensureCustomElement',
    ],
    uiService: [
      'formatDate', 'modalService', 'dialogService',
      'resourceFormFactory', 'showNotification', 'notificationService',
      'showDialog', 'inputControlService',
    ],
  }

  public logger: LogService
  public kebabCase: any
  public navigate: any
  public route: any
  public userSignedIn: any
  public signOutUser: any
  public modalService: any

  constructor(
    public appService: AppService,
    public uiService: UiService,
  ) {
    this.logger = appService.logger
    this.logLaunch()

    this.setAllDelegatedProperties()
  }

  debug(message) {
    this.logger.debug(message)
  }

  private logLaunch() {
    this.logger.debug(`PageService - Launching Page`)
  }

  // Mixin functions
  public setDelegatedProperties(source: any, propName: string[]): void {}
  public setAllDelegatedProperties(): void {}
}
