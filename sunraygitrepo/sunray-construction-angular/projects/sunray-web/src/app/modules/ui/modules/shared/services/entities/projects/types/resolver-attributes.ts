import {
  Observable,
  BehaviorSubject,
} from 'rxjs'

import {
  iEntityCollection,
  iEntity,
  iEntityAttributes,
} from '@ceo/entity'

export interface iResolverAttribute {
  name: string
  prompt: string
  options$: Observable<iEntityCollection>
  value$: Observable<iEntity>
  step: number
}

export interface iResolverAttributeMap {
  [key: string]: iResolverAttribute
}

export const projectTypeAttributes: iEntityAttributes = {}

export const resolverAttributes: iResolverAttributeMap = {
  'state': {
    name: 'state',
    step: 1,
    prompt: "What state is your construction project in?",
    value: null,
    value$: new BehaviorSubject(null),
    entityAttr: 'state',
    type: 'states',
  },
  'job-type': {
    name: 'job-type',
    step: 2,
    prompt: "What type of construction project are you working on?",
    value: null,
    value$: new BehaviorSubject(null),
    entityAttr: 'jobType',
    type: 'job-types',
  },
  'claimant-project-role': {
    name: 'claimant-project-role',
    step: 3,
    prompt: "What is your role on the project?",
    value: null,
    value$: new BehaviorSubject(null),
    entityAttr: 'claimantProjectRole',
    type: 'project-roles',
  },
}
