import * as _ from 'lodash'

import {
  tap,
  mergeMap,
  map,
  filter,
  withLatestFrom,
  first,
} from 'rxjs/operators'

import {
  pipe,
  BehaviorSubject,
  Observable,
  Subscription,
  combineLatest,
  of as observableOf
} from 'rxjs'


import {
  Injectable,
  OnDestroy,
} from '@angular/core'

import { select } from '@ngrx/store'

import { startsWith } from '@ceo/core'

import {
  iEntity,
  iEntityCollection,
  EntityCollection,
  EntityActions,
  EntityRelationshipProvider,
  EntitySelectorTypes,
} from '@ceo/entity'

import {
  routerSelectors,
} from '@ceo/state'

import {
  DataService as SharedDataService,
} from '../imports'

@Injectable()
export class DataService extends SharedDataService {
  private term: any = 'enterprise-solutions'

  get cmsTestimonials$(): Observable<iEntityCollection> {
    return this.memoized('_cmsTestimonials$', this.loadCmsTestimonials$)
  }

  loadCmsTestimonials$() {
    let ri = {
      feature: 'cms',
      type: 'testimonials',
      filter: {
        taxonomy: "category",
        term: this.term
      }
    }

    return this.entityService.entityData$(ri)
  }
}
