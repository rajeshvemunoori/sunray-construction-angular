
import {filter} from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { DataService }      from '@ceo/entity';

@Injectable()
export class FormFactory {

  constructor(
    private _dataService: DataService
  ) { }

  getFormEntity$(formName) {
    let resourceOpts = {
      feature: "app",
      type: "forms",
      id: formName
    }
    return this._dataService.get$(resourceOpts).pipe(
      filter((entity) => entity))
  }
}
