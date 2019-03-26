import { Observable }   from 'rxjs';
import { Store }        from '@ngrx/store';

import {
  Injectable,
  InjectionToken,
  Inject,
} from '@angular/core';

import {
  iEntity,
} from '@ceo/entity';
import {
  ApplicationConfigActions,
  applicationConfigSelectors,
} from '@ceo/state';

import {
  DataService as AppDataService,
  EntitySelectorService,
} from '@ceo/entity';

let resourceType = {
  feature: 'app',
  type: 'invoices',
}
export const RESOURCE_TYPE = new InjectionToken('Resource Type');
export const resourceTypeProvider = {
  provide: RESOURCE_TYPE,
  useValue: resourceType,
}

@Injectable()
export class DataService {
  private _entity$: Observable<iEntity>;

  constructor(
    @Inject(RESOURCE_TYPE) private resourceType,
    private _store: Store<any>,
    private _selectorService: EntitySelectorService,
    private _dataService: AppDataService,
  ) {}

  get entity$(): Observable<any> {
    if(!this._entity$) {
      this._entity$ = this.loadEntity$();
    }
    return this._entity$;
  }

  loadEntity$(): Observable<any> {
    this._store.dispatch(new ApplicationConfigActions.SetResourceType(this.resourceType));
    return this._store.select(applicationConfigSelectors.primaryEntity);
  }

  loadDocumentRequestFees$() {
    let selector = this._selectorService.getSelector('sunray.invoices.selectedEntityDocumentRequestFeesAll');
    return this._store.select(selector);
  }

  loadHeader$() {
    let resourceOpts = {
      feature: "app",
      type: "configs",
      filter: {
        item: 'invoice-fees-edit-headers' 
      }
    }
    return this._dataService.get$(resourceOpts);
  }
}
