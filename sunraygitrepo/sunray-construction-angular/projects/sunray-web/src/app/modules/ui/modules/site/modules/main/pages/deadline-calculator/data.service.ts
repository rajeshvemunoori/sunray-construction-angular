import * as _ from 'lodash'

import {
  Observable,
  BehaviorSubject,
} from 'rxjs'

import {
  map,
} from 'rxjs/operators'

import { Injectable }           from '@angular/core'

import {
  iEntityCollection,
  Entity,
} from '@ceo/entity'

import {
  SunrayEntity,
} from '@sunray-api'

import {
  DataService as BaseDataService,
} from '../imports'

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseDataService {
  private _project$: Observable<iEntity>

  cmsPagesOpts: iResourceIdentifier = {
    filter: {
      slug: 'deadline-calculator'
    }
  }

  get cmsPage$() {
    return this.cmsPages$
  }

  get project$(): Observable<iEntity> {
    return this.memoized('_project$', this.buildProject$)
  }

  private buildProject$(): Observable<iEntity> {
    var project$ = new BehaviorSubject()

    let attributes = {
      'start-date': new Date(),
      'end-date': new Date('1995-12-17T03:24:00'),
    }
    let params = {
      type: 'projects',
      attributes: attributes,
    }
    this.entityFactory.build$('app', params).subscribe(project => {
      console.log("get it")
      return project$.next(project)
    })

    return project$
  }

  /*

  build(params: any): iEntityConstructorParams {
    let propNames = ['id', 'type', 'attributes', 'relationships']
    return <iEntityConstructorParams>_.pick(params, propNames)
  }
  

  get cmsPage$(): Observable<iEntity> {
    return this.memoized('_cmsPage$', this.loadCmsPage$)
  }


  private loadCmsPage$() {
    let ri = {
      feature: 'cms',
      type: 'pages',
      filter: {
        slug: 'deadline-calculator'
      }
    }

    return this.entityService.entityData$(ri)
  }
  */
}
