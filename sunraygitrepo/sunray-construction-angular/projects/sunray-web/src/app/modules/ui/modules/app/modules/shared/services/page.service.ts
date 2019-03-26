import { Injectable } from '@angular/core'

import { Store, select } from '@ngrx/store'

import {
  PageService as BasePageService
} from '../imports'

import { AppService }  from './app.service'
import { UiService }   from '@sunray-ui-shared'

@Injectable()
export class PageService extends BasePageService {
  constructor(
    public appService: AppService,
    public uiService: UiService,
  ) {
    super(appService, uiService)
  }
}
