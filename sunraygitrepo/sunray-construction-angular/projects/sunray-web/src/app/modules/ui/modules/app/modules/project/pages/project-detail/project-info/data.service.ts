import * as _           from 'lodash'

import {
  combineLatest as observableCombineLatest,
  Observable
} from 'rxjs'
import {
  map, mergeMap, filter
} from 'rxjs/operators'
import { Injectable } from '@angular/core'

import {
  DataService as SharedDataService,
} from '@sunray-ui-app/modules/imports'
import { SunrayEntity }     from '@sunray-api'

@Injectable()
export class DataService extends SharedDataService {
  appResourceConfigurationsOpts: any = {
    id: 'projects_projects'
  }

  job: iEntity

  get project$() {
    return this.primaryEntity$.pipe(
      filter(entity => !_.isNil(entity))
    )
  }

  get job$() {
    return this.project$.pipe(
      mergeMap(project => {
        return this.entityRelationshipProvider.provide$(
          project,
          'job',
          {load: false}
        )
      }),
      filter(job => !_.isNull(job))
    )
  }

  getProjectJobEntity$() {
    return observableCombineLatest(
      this.project$,
      this.job$
    ).pipe(map(([project, job]) => {
      return this.mergeProjectJobEntity(project, job)
    }))
  }

  mergeProjectJobEntity(project, job) {
    let attributes = this.mergeAttributes(project, job)
    return this.sunrayEntity(project.id, attributes, project.relationships)
  }

  mergeAttributes(project, job) {
    let attributes = _.merge(
      project.attributes, 
      job.attributes
    )
    return attributes
  }

  sunrayEntity(id, attributes, relationships) {
    let entityAttributes = {
      id: id,
      type: 'project-job',
      attributes: attributes,
      relationships: relationships
    }
    return new SunrayEntity(entityAttributes)
  }

  combinedProjectParticipants$() {
    return observableCombineLatest(
      this.getProjectParticipants$(),
      this.getClient$(),
      this.getRepresentative$()
    ).pipe(
      map(([participants, client, representative]) => {
        participants.entities = 
          _.concat(participants.entities, [client, representative])
        return participants
      })
    )
  }

  getProjectParticipants$() {
    return this.loadRelationship$( 
      'project-participants'
    )
  }

  getClient$() {
    return this.loadRelationship$( 
      'client'
    ).pipe(
      map(participant => {
        participant.projectRoleName = participant.projectRoleName + "(Your Customer)"
        return participant 
      })
    )
  }

  getRepresentative$() {
    return this.loadRelationship$( 
      'representative'
    ).pipe(
      map(participant => {
        participant.projectRoleName = participant.projectRoleName + "(You)"
        return participant 
      })
    )
  }

  loadRelationship$(entityType) {
    return this.job$.pipe(
      mergeMap((job) => {
        return this.entityRelationshipProvider.provide$(
          job,
          entityType,
          {load: false}
        )
      })
    )
  }

  delete(entity) {
    let resourceOpts = {
      feature: "app",
      type: entity.type,
      id: entity.id 
    }
    this.delete$(resourceOpts)
  }
}
