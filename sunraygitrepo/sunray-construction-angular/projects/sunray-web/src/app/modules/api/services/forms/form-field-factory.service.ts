
import {filter} from 'rxjs/operators';
// Fetches a FormFieldEntity collection for a formEntity.
// Input:
//   FormEntity
//
//  Output:
//    Observable<EntityCollection<FormFieldEntity>>

import { Observable }   from 'rxjs';

import { Injectable }   from '@angular/core';

import { DataService }      from '@ceo/entity';


@Injectable({
  providedIn: 'root'
})

export class FormFieldFactory {
  constructor(
    private _dataService: DataService
  ) { }

  build$(formEntity){
    return this.getFormFields$(formEntity);
  }

  getFormFields$(formEntity) {
    let resourceOpts = {
      feature: "app",
      type: "form-fields",
      filter: {
        'form-id': formEntity.id
      }
    };
    return this._dataService.get$(resourceOpts).pipe(
      filter((collection) => collection.length > 0))
  }
}
