import * as _           from 'lodash';
import { Observable }   from 'rxjs';
import { map }          from 'rxjs/operators';
import { Store }        from '@ngrx/store';

import { Injectable } from '@angular/core';

import {
  DataService as AppDataService,
  iEntityCollection,
  EntitySelectorService,
} from '@ceo/entity'

import {
  DataService as SharedDataService,
} from '@sunray-ui-app/modules/imports'

@Injectable({
  providedIn: 'root'
})
export class DataService extends SharedDataService {
  appResourceConfigurationsOpts = {
    id: 'invoices' 
  }
  itemActions: any = [
    "edit", "confirm", "pay","excel",
    "pdf_summary", "download_work_orders",
    "credit_card_payment_create",
  ]
}
