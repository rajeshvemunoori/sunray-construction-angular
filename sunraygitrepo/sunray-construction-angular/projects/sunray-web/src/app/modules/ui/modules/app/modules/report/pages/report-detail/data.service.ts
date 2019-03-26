import * as _           from 'lodash'
import { Observable }   from 'rxjs'
import { Store }        from '@ngrx/store'

import { Injectable } from '@angular/core'

import { DataService as AppDataService } from '@ceo/entity'
import { EntitySelectorService }  from '@ceo/entity'

import { reportFields } from './report-type-fields'

@Injectable()
export class DataService {

  constructor(
    private _dataService: AppDataService,
    private _store: Store<any>,
    private _selectorService: EntitySelectorService,
  ) { }

  getReport$(report) {
    let resourceOpts = {
      feature: "app",
      type: "report-reports",
      data: reportFields[report]
    }

    return this._dataService.create$(resourceOpts);
  }

  processReports$(entity$) {
    entity$.map((report) => {
      debugger
    });
  }

  getConfigHeaders$(report) {
    let resourceOpts = {
      feature: 'app',
      type: 'configs',
      filter: {
        item: `${report}-report-headers` 
      }
    }

    return this._dataService.get$(resourceOpts)
  }
}
