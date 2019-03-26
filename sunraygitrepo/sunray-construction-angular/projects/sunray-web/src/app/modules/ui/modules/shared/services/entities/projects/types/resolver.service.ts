import * as _ from 'lodash'

import {
  Observable,
  of as observableOf,
  combineLatest,
  BehaviorSubject,
} from 'rxjs'

import {
  map,
  mergeMap,
  filter,
  startWith,
} from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { InflectionService } from '@ceo/core'

import {
  camelCase,
} from '@ceo/core'

import {
  iEntity,
  iEntityAttributes,
  EntityCollection,
} from '@ceo/entity'

import {
  Mixin,
  Memoizer,
} from '@ceo/shared'

import {
  FormFactory,
  ResourceFormFactory,
  EntityFactory,
} from '@sunray-api'

import {
  EntityService,
} from '../../../entity.service'
import {
  EntityTypeDynamicPropertyNameService,
} from '../../../entity-type-dynamic-property-name.service'

import {
  Provider as DocumentTypeProvider,
} from '../../document-types/provider.service'

import {
  resolverAttributes,
  projectTypeAttributes,
} from './resolver-attributes'

@Injectable({
  providedIn: 'root'
})
@Mixin([Memoizer])
export class Resolver {
  _attributes: any = resolverAttributes
  _projectTypeAttributes: iEntityAttributes = projectTypeAttributes
  attributes$: BehaviorSubject<any>

  projectType: iEntity
  projectType$: BehaviorSubject<iEntity>


  constructor(
    public formFactory: FormFactory,
    public entityService: EntityService,
    public inflectionService: InflectionService,
    public entityTypeDynamicPropertyNameService: EntityTypeDynamicPropertyNameService,
    public resourceFormFactory: ResourceFormFactory,
    public entityFactory: EntityFactory,
    public documentTypeProvider: DocumentTypeProvider,
  ) {
    this.buildEntity$(this._projectTypeAttributes)
      .subscribe(entity =>
        this.projectType = entity
      )
    this.projectType$ = new BehaviorSubject(this.projectType)

    this.loadAttributeOptions()
    this.attributes$ = new BehaviorSubject(this.attributes)
  }

  get documentTypes$() {
    return this.memoized('_documentTypes$', this.loadDocumentTypes$)
  }

  get attributes() {
    return _.sortBy(this._attributes, 'step')
  }

  get values$() {
    let values$ = _.map(this.attributes, 'value$')
    return combineLatest(values$)
  }

  get currentAttribute$() {
    return this.memoized('_currentAttribute$', this.setCurrentAttribute$)
  }

  setAttribute(attrName, value): void {
    this.resolvedAttributeValue$(attrName, value)
      .subscribe(value => {
        this.updateProjectType(attrName, value)
      })
  }

  setCurrentAttribute$() {
    return this.projectType$.pipe(
      map(projectType => this.firstMissingAttribute(projectType))
    )
  }

  firstMissingAttribute(projectType) {
    let isMissing = (attribute) => {
      let entityAttr = this.entityAttribute(attribute.name)
      return _.isNil(this.projectType[entityAttr])
    }
    return _.find(this.attributes, isMissing)
  }

  private updateProjectType(attr, value) {
    let entityAttr = this.entityAttribute(attr)

    this.projectType[entityAttr] = value
    
    let idAttr = `${attr}-id`
    var attrValue
    if(value && value.id) {
      attrValue = value.id
    }
    else {
      attrValue = null
    }
    this.projectType.setAttr(idAttr, attrValue)
    

    this.projectType$.next(this.projectType)
  }

  private entityAttribute(attrName: string): string {
    return `${camelCase(attrName)}`
  }

  private buildEntity$(
    attributes: iEntityAttributes
  ): Observable<iEntity> {
    return this.entityFactory.build$('project-types', attributes)
  }

  private loadDocumentTypes$() {
    return this.appProjectTypes$.pipe(
      map(projectTypes => projectTypes.entities[0]),
      filter(projectType => !_.isNil(projectType)),
      mergeMap(projectType => {
        if(_.isNil(projectType)) {
          return null
        }

        return this.entityService
          .provideRelationship$(projectType, 'project-type-request-types')
      }),
      mergeMap(requestTypes => {
        return this.documentTypeProvider.provide$(requestTypes)
      })
    )
  }

  // Private methods

  private loadAttributeOptions() {
    let loadOptions = (attribute, name) => {
      let attributeName = `${camelCase(attribute.type)}$`
      let optionsName = this.entityTypeDynamicPropertyNameService.build('app', attributeName)
      attribute.options$ = this[optionsName] || this.entityService[optionsName]
    }

    _.map(this.attributes, loadOptions)
  }

  private get appProjectTypes$() {
    return this.memoized('_appProjectTypes$', this.loadAppProjectTypes$)
  }

  private loadAppProjectTypes$() {
    let filter = _.clone(this.projectType.attributes)
    let claimantProjectRoleId = filter['claimant-project-role-id']
    if(claimantProjectRoleId) {
      filter['claimant-project-role-id'] = [null, claimantProjectRoleId]
    }

    let ri = {
      feature: 'app',
      type: 'project-types',
      filter: filter,
    }

    return this.entityService.entityData$(ri)
  }

  private get appProjectRoles$() {
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

  private resolvedAttributeValue$(attrName, value) {
    if(_.has(value, 'id')) {
      return observableOf(value)
    }
    else if(_.isNil(value)) {
      return observableOf(null)
    }
    else {
      return this.lookupAttributeValue$(attrName, value)
    }
  }

  private lookupAttributeValue$(
    attrName: string,
    value: any,
  ): Observable<any> {
    let attribute = this.getAttribute(attrName)

    return attribute.options$.pipe(
      map(options => {
        let lookupValue = this.inflectionService.slugify(value)
        return options.find(lookupValue)
      })
    )
  }

  private getAttribute(name: string) {
    return this._attributes[name]
  }

  // Mixin functions
  public memoized(property: string, value: any): any {}
}

/*
  setAttributeOld(name, value): void {
    let attribute = this._attributes[name]
    this.resolvedValue$(attribute, value)
      .subscribe(nextValue => {
        attribute.value = nextValue

        let nextAttributeValue = {
          attribute: attribute.name,
          value: nextValue,
        }
        attribute.value$.next(nextAttributeValue)
        this.attributes$.next(this.attributes)
      }
    )
  }

  get projectTypes$() {
    return this.memoized('_projectTypes$', this.resolvedProjectTypes$)
  }

  private resolvedProjectTypes$() {
    return combineLatest(this.appProjectTypes$, this.values$).pipe(
      map(([projectTypes, values]) => {
        let buildCondition = (conditions, value) => {
          if(!value || !value.value) {
            return conditions
          }

          let lookupAttr = `${camelCase(value.attribute)}Id`
          conditions[lookupAttr] = value.value.id
          return conditions
        }
        let conditions = _.reduce(values, buildCondition, {})
        if(_.isEmpty(conditions)) {
          return projectTypes.none()
        }
        else {
          conditions = _.omit(conditions, 'lienorProjectRoleId')
          return projectTypes.where(conditions)
        }
      })
    )
  }



*/
