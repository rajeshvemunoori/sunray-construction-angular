import * as _           from 'lodash';
import { Observable }   from 'rxjs';

import { Injectable } from '@angular/core';

import { DataService as AppDataService } from '@ceo/entity';

@Injectable({
  providedIn: 'root'
})
export class ReportTypeService {
  collection$: Observable<any>;

  constructor(
    private _dataService: AppDataService,
  ) { }

  loadCollection$() {
    let resourceOpts = {
      feature: 'app',
      type: 'report-report-type-report-types',
    }
    if(!this.collection$) {
      this.collection$ = this._dataService.get$(resourceOpts)
    }
  }
}
