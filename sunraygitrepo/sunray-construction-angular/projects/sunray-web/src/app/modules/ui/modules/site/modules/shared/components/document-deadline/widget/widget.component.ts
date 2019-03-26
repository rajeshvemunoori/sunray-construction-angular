declare var $:any

import * as _ from 'lodash'

import {
  BehaviorSubject, Observable, combineLatest, timer,
  of as observableOf,
} from 'rxjs'
import { map } from 'rxjs/operators'

import { Component, OnInit, Input } from '@angular/core'


import {
  iEntity, iEntityCollection,
  EntityCollection,
  EntityRelationshipProvider,
}  from '@ceo/entity'

import {
  SunrayEntity,
} from '@sunray-api'

import {
  BaseComponent,
  DocumentTypeProvider,
} from '../../../imports'

import { jobTypes }     from './job-types'
import { projectRoles } from './project-roles'

export interface iWizardStep {
  step: number
  name: string
  isActive: boolean
}

export interface iWizardStepMap {
  [key: string]: iWizardStepMap
}

@Component({
  selector: 'sunray-site-document-deadline-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent extends BaseComponent {
  @Input() documentTypeProvider: DocumentTypeProvider

  @Input() jobType: SunrayEntity
  @Input() jobTypes$: Observable<iEntityCollection>
  @Input() projectRole: SunrayEntity
  @Input() projectRoles$: Observable<iEntityCollection>
  @Input() projectTypes$: Observable<iEntityCollection>
  @Input() state$: Observable<SunrayEntity>
  @Input() states$: Observable<iEntityCollection>
  @Input() stateRequestTypes$: Observable<iEntityCollection>
  @Input() statutoryDocuments$: Observable<iEntityCollection>

  activeProjectTypes$: Observable<SunrayEntity>
  projectTypeRequestTypes$: Observable<iEntityCollection> =
    observableOf(new EntityCollection())

  jobTypeChanges$ = new BehaviorSubject<any>(null)
  projectRoleChanges$ = new BehaviorSubject<any>(null)

  jobType$ = new BehaviorSubject<any>(null)
  projectRole$ = new BehaviorSubject<any>(null)

  projectType: iEntity

  steps$: Observable<any>
  
  steps: iWizardStepMap = {
    state: {
      step: 1,
      name: 'state',
      isActive: true,
      prompt: "Get Preliminary Notice, Bond and Lien Info In Your State",
    },
    jobType: {
      step: 2,
      name: 'jobType',
      isActive: false
    },
    projectRole: {
      step: 3,
      name: 'projectRole',
      isActive: false
    },
    documentType: {
      step: 4,
      name: 'documentType',
      isActive: false
    },
    projectDate: {
      step: 5,
      name: 'projectDate',
      isActive: false
    },
  }

  activeStep: string = 'jobTypes'

  constructor(
    private entityRelationshipProvider: EntityRelationshipProvider,
  ) {
    super()
  }
  

  ngOnInit() {
    this.steps$ = observableOf(this.buildSteps())
    this.steps$.subscribe(steps => this.steps = steps)

    this.jobTypeChanges$.subscribe((event) => this.setJobType(event))
    this.projectRoleChanges$.subscribe((event) => this.setProjectRole(event))

    this.activeProjectTypes$ = this.activeProjectTypesObserver$()
  }

  private buildSteps() {
    var stepNumber = 1
    let buildStep = (steps, attribute, attributeName) => {
      var isActive
      if(stepNumber == 1) {
        isActive = true
      }
      else {
        isActive = false
      }
      stepNumber = _.size(steps) + 1
      steps[attributeName] = _.merge(attribute, {step: stepNumber, isActive: isActive})

      return steps
    }
    return _.reduce(this.documentTypeProvider.attributes, buildStep, {})
  }

  activeProjectTypesObserver$() {
    let combinedData = combineLatest(
      this.projectTypes$,
      this.jobType$,
      this.projectRole$,
    )

    return combinedData.pipe(
      map(
        ([projectTypes, jobTypeEvent, projectRole]) => {
          return this.buildActiveProjectTypes(
            projectTypes,
            jobTypeEvent,
            projectRole,
          )
        }
      ))
  }

  buildActiveProjectTypes(projectTypes, jobType, projectRole) {
    let conditions = {
      jobTypeId: null,
      clientProjectRoleId: null,
    }

    if(jobType) {
      conditions.jobTypeId = [jobType.id, null]
    }

    if(projectRole) {
      conditions.clientProjectRoleId = [projectRole.id, null]
    }

    let result = projectTypes.where(conditions)

    if(projectTypes.entities.length > 0 ) {
      this.projectType = projectTypes.entities[0]
      this.projectTypeRequestTypes$ =
        this.entityRelationshipProvider.provide$(this.projectType, 'project-type-request-types').pipe(
          map(collection => this.requestTypeCollection(collection)),
        )

    }

    return result
  }

  requestTypeCollection(collection) {
    return collection.where({isRequired: true}).sort('sequenceOrder')
  }

  isActiveStep(question) {
    return this.currentStep.name == question
  }

  private setJobType(event) {
    if(event) {
      if(this.currentStep.name == 'jobType') {
        this.nextStep()
      }
      this.jobType = event.item
      this.jobType$.next(this.jobType)
    }
  }

  private setProjectRole(event) {
    if(event) {
      if(this.currentStep.name == 'projectRole') {
        this.nextStep()
      }
      this.projectRole = event.item
      this.projectRole$.next(this.projectRole)
    }
  }

  private nextStep() {
    let currentStep = this.currentStep
    let currentStepNumber = currentStep ? currentStep.step : 0
    let nextStep = currentStepNumber + 1
    this.deactivateSteps()
    this.activateStep(nextStep)
  }

  private deactivateSteps() {
    _.map(this.steps, this.deactivateStep)
  }

  private deactivateStep(step, stepName) {
    step.isActive = false
  }

  private activateStep(stepNumber) {
    let step = _.find(this.steps, { step: stepNumber })

    if(step) {
      step.isActive = true
    }
  }

  get currentStep() {
    let step = this.findCurrentStep()
    if(step) {
      return step
    }
    else {
      this.activateStep(1)
      return this.findCurrentStep()
    }
  }

  private findCurrentStep() {
    return _.find(this.steps, {isActive: true})
  }

  private onCalculateDeadlines(event) {
    this.nextStep()
  }

  onRegionSelect(region) {
    console.log("Selected " + region)
    this.documentTypeProvider.set('state', region)
    this.nextStep()
  }
}
