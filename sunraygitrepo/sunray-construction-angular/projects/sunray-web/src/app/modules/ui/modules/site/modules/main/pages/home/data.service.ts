import { Observable, Subscriber }   from 'rxjs'

import { Injectable } from '@angular/core'

import { iEntityCollection }               from '@ceo/entity'

import {
  DataService as BaseDataService,
} from '../imports'

@Injectable()
export class DataService extends BaseDataService {
  get cmsGalleryImages$(): Observable<iEntityCollection> {
    return this.memoized('_cmsGalleryImages$', this.loadCmsGalleryImages$)
  }

  private loadCmsGalleryImages$() {
    let ri = {
      feature: 'cms',
      type: 'gallery-images',
      filter: {
        taxonomy: "category",
        term: "home-page"
      }
    }

    return this.entityService.entityData$(ri)
  }

  get cmsPublications$(): Observable<iEntityCollection> {
    return this.memoized('_cmsPublications$', this.loadCmsPublications$)
  }

  private loadCmsPublications$() {
    let ri = {
      feature: 'cms',
      type: 'publications',
      /*
      filter: {
        taxonomy: "category",
        term: "home-page"
      }
      */
    }

    return this.entityService.entityData$(ri)
  }
}
