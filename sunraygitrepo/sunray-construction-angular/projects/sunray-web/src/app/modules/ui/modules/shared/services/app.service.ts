import * as _ from 'lodash'

import {
  Observable,
} from 'rxjs'


import { Injectable } from '@angular/core'

import {
  Router, ActivatedRoute,
  NavigationStart, NavigationEnd,
} from '@angular/router'

import { NgbModal, NgbActiveModal }   from '@ng-bootstrap/ng-bootstrap'


import {
  AnalyticsService,
} from '@ceo/analytics'


import {
  Config,
  LogService,
  InflectionService,
} from '@ceo/core'

import {
  AuthService,
  Mixin,
  PropertyDelegator,
  CustomElementManager,
  CustomElementFactory,
} from '@ceo/shared'

import { environment } from 'projects/sunray-web/src/environments/environment'

import { RouterEventsService }  from './router-events.service'

@Injectable({
  providedIn: 'root'
})
@Mixin([PropertyDelegator])
export class AppService implements PropertyDelegator {
  public delegatedProperties = {
    inflectionService: ['kebabCase'],
    authService: ['userSignedIn', 'signOutUser'],
    router: ['navigate', 'url'],
    routerEventsService: ['routerNavigationStart$'],
  }

  constructor(
    public analytics: AnalyticsService,
    public authService: AuthService,
    public inflectionService: InflectionService,
    public logger: LogService,
    public route: ActivatedRoute,
    public router: Router,
    public routerEventsService: RouterEventsService,
    public customElementManager: CustomElementManager,
    public customElementFactory: CustomElementFactory,
  ) {
    this.logLaunch()
    this.setAllDelegatedProperties()
  }

  log(message) {
  }

  debug(message) {
    this.logger.debug(message)
  }

  ensureCustomElement(
    elementName,
    ctor,
    opts
  ) {
    let config = {
      elementName: elementName,
      ctor: ctor,
      opts: opts,
    }
    this.defineCustomElement(config)
  }

  defineCustomElement(...args) {
    return this.customElementManager.define(...args)
  }

  buildCustomElement(...args) {
    return this.customElementFactory.build(...args)
  }

  private logLaunch() {
    this.logger.debug(`AppService -> Config env: ${Config.ENVIRONMENT().ENV}`)
  }

  // Mixin functions
  public setDelegatedProperties(source: any, propName: string[]): void {}
  public setAllDelegatedProperties(): void {}
}
