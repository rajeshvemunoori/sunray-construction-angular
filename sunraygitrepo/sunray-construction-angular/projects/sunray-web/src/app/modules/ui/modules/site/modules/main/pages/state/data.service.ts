import * as _ from 'lodash'

import {
  tap,
  mergeMap,
  map,
  filter,
  withLatestFrom,
  distinctUntilChanged,
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
  DocumentTypeProvider,
} from '../imports'

@Injectable()
export class DataService extends SharedDataService {
  entityType: string = 'states'

  private pageCategory: any = {
    taxonomy: "category",
    term: 'states'
  }

  cmsTestimonialsOpts: any = {
    filter: this.pageCategory,
  }

  appProjectRolesOpts: any = {
    filter: {
      scope: 'primary-claimant'
    }
  }

  get appState$(): Observable<iEntity> {
    return this.primaryEntity$
  }

  /*
  appProjectRoles$(filter: any = {}) {
    return this.memoized('_appProjectRoles$', this.loadAppProjectRoles$)
  }

  private loadAppProjectRoles$() {
    let ri = {
      feature: 'app',
      type: 'project-roles',
      filter: {
        scope: 'primary-claimant'
      }
    }

    return this.entityService.entityData$(ri)
  }
  */

  // State Request Types
  get appStateRequestTypes$(): Observable<iEntityCollection> {
    return this.memoized('_appStateRequestTypes$', this.loadAppStateRequestTypes$)
  }

  private loadAppStateRequestTypes$(): Observable<iEntityCollection> {
    return this.appState$
      .pipe(
        map(state => state.id),
        distinctUntilChanged(),
        mergeMap(stateId => this.stateRequestTypesForState$(stateId)),
        map(collection => this.sortedStateRequestTypes(collection)),
      )
  }

  private stateRequestTypesForState$(stateId: number): Observable<iEntityCollection> {
    console.log("going to fetch the state request types")

    let ri = {
      feature: 'app',
      type: 'state-request-types',
      filter: {
        'state-id': stateId
      }
    }

    return <Observable<iEntityCollection>>this.entityService.entityData$(ri)
  }

  private sortedStateRequestTypes(collection): iEntityCollection {
    return collection.sort('sequenceOrder')
  }

  // State Request Types
  get appProjectTypes$(): Observable<iEntityCollection> {
    return this.memoized('_appProjectTypes$', this.loadAppProjectTypes$)
  }

  private loadAppProjectTypes$(): Observable<iEntityCollection> {
    return this.appState$
      .pipe(
        map(state => state.id),
        distinctUntilChanged(),
        mergeMap(stateId => this.appProjectTypesForState$(stateId)),
      )
  }

  private appProjectTypesForState$(stateId: number): Observable<iEntityCollection> {
    let ri = {
      feature: 'app',
      type: 'project-types',
      filter: {
        'state-id': stateId
      }
    }

    return <Observable<iEntityCollection>>this.entityService.entityData$(ri)
  }

  get cmsState$() {
    return this.memoized('_cmsState$', this.loadCmsState$)
  }

  private loadCmsState$() {
    return combineLatest(this.appState$, this.cmsStates$).pipe(
      map(([state, states]) => this.cmsStateForAppState(state, states)),
    )
  }

  private cmsStateForAppState(state, states) {
    return states.findByAttr('slug', state.slug)
  }

  /*
  get cmsTestimonials$(): Observable<iEntityCollection> {
    return this.memoized('_cmsTestimonials$', this.loadCmsTestimonials$)
  }

  loadCmsTestimonials$() {
    let ri = {
      feature: 'cms',
      type: 'testimonials',
      filter: this.pageCategory,
    }

    return this.entityService.entityData$(ri)
  }
  */

  get cmsFaqs$(): Observable<iEntityCollection> {
    return this.memoized('_cmsFaqs$', this.loadCmsFaqs$)
  }

  loadCmsFaqs$() {
    let ri = {
      feature: 'cms',
      type: 'faqs',
      filter: this.pageCategory,
    }

    return this.entityService.entityData$(ri)
  }


  /*
  private cmsStateForAppState$(state: iEntity): Observable<iEntity> {
    let ri = {
      feature: 'cms',
      type: 'states',
      id: state.
      filter: {
        'state-id': state.id
      }
    }

    return <Observable<iEntityCollection>>this.entityService.entityData$(ri)

  }
  */

  get statutoryDates$(): Observable<any> {
    return this.memoized('_statutoryDates$', this.loadStatutoryDates$)
  }

  private loadStatutoryDates$() {
    return this.appStateRequestTypes$.pipe(
      map((collection) => this.buildStatutoryDates(collection)))
  }

  private buildStatutoryDates(collection): any[] {
    let buildDate = (entity) => {
      let attrs = _.pick(entity, this.dateAttrs)
      return attrs
    }
    return collection.map(buildDate)
  }

  get dateAttrs(): string[] {
    return [
      'id',
      'name',
      'due-date-type',
      'due-date-value'
    ]
  }


  get pageSections$(): any {
    return this.memoized('_pageSections$', this.loadPageSections$)
  }

  loadPageSections$() {
    this.primaryEntity$
      .pipe(
        map(entity => this.sections(entity))
      )
  }


  private sections(entity) {
    if(!entity) {
      return {}
    }

    return {
      deadlineCalculator: {
        heading: `${entity.name} Deadline Calculator`,
        subHeading: "Provide Your Project Dates to Calculate Deadlines",
      },
      deadlineWidget: {
        heading: `${entity.name} Deadlines`
      },
      faqs: {
        heading: "Frequently Asked Questions",
        subHeading: "Preliminary Notice, Stop Payment Notice, Mechanic's Lien",
      },
      reviews: {
        heading: "Reviews",
        term: "states-testimonials",
      },
    }
  }

  private setSelectedState(state: iEntity): void {
    if(state) {
      let payload = {
        entity: state
      }
      this.store.dispatch(new EntityActions.SetSelected('sunray.entities.states', payload))
    }
  }

  /*

  private fetchStates$() {
    return this.fetchResourceType$('states')
  }

  private fetchJobTypes$() {
    return this.fetchResourceType$('job-types')
  }

  private fetchProjectRoles$() {
    return this.fetchResourceType$('project-roles')
  }

  private fetchProjectTypes$() {
    return this.state$
      .subscribe((state) => this.fetchStateProjectTypes$(state))
  }

  private fetchStateProjectTypes$(state) {
    if(state) {
      let filter = {}
      filter['state-id'] = state.id

      let resourceOpts = {
        feature: 'app',
        type: 'project-types',
        filter: filter
      }

      return this.fetchResource$(resourceOpts)
    }
  }

  private fetchStateRequestTypes$() {
    return this.state$
      .subscribe((state) => this.fetchStateStateRequestTypes$(state))
  }

  private fetchStateStateRequestTypes$(state) {
    if(state) {
      let filter = {}
      filter['state-id'] = state.id

      let resourceOpts = {
        feature: 'app',
        type: 'state-request-types',
        filter: filter
      }

      return this.fetchResource$(resourceOpts)
    }
  }


  private fetchResource$(resourceOpts: any, feature: string = 'sunray') {
    if(_.isString(resourceOpts)) {
      resourceOpts = {
        type: resourceOpts
      }
    }

    let defaultOpts ={
      feature: feature
    }
    let opts = _.merge(defaultOpts, resourceOpts)

    return this.dataService.get$(opts)
  }
  */

  private isStatePage(state): boolean {
    return startsWith(state.url, this.pageUrlPrefix)
  }
}
