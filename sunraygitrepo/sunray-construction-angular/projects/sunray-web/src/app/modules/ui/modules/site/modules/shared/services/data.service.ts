import { Injectable } from '@angular/core'

import { Store } from '@ngrx/store'

import {
  DataService as BaseDataService,
} from '@sunray-ui-shared'

@Injectable()
export class DataService extends BaseDataService {}
