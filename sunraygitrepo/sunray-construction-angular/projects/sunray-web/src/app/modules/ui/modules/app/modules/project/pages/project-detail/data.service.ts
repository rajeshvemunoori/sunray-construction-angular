import * as _ from 'lodash'

import { Observable }   from 'rxjs'

import {
  Injectable,
  InjectionToken,
  Inject,
} from '@angular/core'

import { Store } from '@ngrx/store'

import {
  iEntity,
  entityFeatureSelectors,
} from '@ceo/entity'

import { EntitySelectorService }  from '@ceo/entity'

@Injectable()
export class DataService {
  private _entity$: Observable<iEntity>

  constructor(
    private store: Store<any>,
    private selectorService: EntitySelectorService,
  ) {}

  get entity$(): Observable<any> {
    if(!this._entity$) {
      this._entity$ = this.loadEntity$()
    }
    return this._entity$
  }

  loadEntity$(): Observable<any> {
    return this.store.select(entityFeatureSelectors.primaryEntity)
  }
}
