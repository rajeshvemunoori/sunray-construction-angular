import * as _ from 'lodash'
import {
  Observable, pipe,
  BehaviorSubject,
} from 'rxjs'
import {
  mergeMap, map,
  filter,concat
} from 'rxjs/operators'

import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { Mixin } from '@ceo/shared'
import {
  iEntityCollection,
  iEntity,
} from '@ceo/entity'
import {
  iEntityCollection,
} from '@ceo/entity'

import {
  DataService as BaseDataService,
} from '@sunray-ui-shared'

import {
  HandleActions,
} from '../mixins';

@Injectable()
@Mixin([HandleActions])
export class DataService extends BaseDataService {
  _dialogActions$: BehaviorSubject<any> =
    new BehaviorSubject({action: {name: 'init'}})
  ctor: any
  itemActions: any = [
    "edit", "destroy",
  ]

  itemActionIcons: any = {
    edit: {
      'image-url' : "/assets/img/icons/edit.png",
      'alt-name'  : "edit"
    },
    destroy: {
      'image-url' : "/assets/img/icons/delete.png",
      'alt-name'  : "destroy"
    }
  }

  collecitonActions: any = ["new"]
  _entity: iEntity

  set dialogActions$(dialogActions$): () => any {
    this._dialogActions$ = dialogActions$
  }

  get dialogActions$(): () => any {
    return this._dialogActions$
  }

  get entity() {
    return this._entity
  }

  set entity(entity) {
    this._entity = entity
  }

  loadEntity() {
    return this.primaryEntity$.pipe(
      filter(entity => entity))
      .subscribe(entity => {
        this.entity = entity
      })
  }

  getTableHeader$(item: string) {
    return this.appConfigs$.pipe(
      map((collection: iEntityCollection) => {
        return collection.where({item: item})
      })
    )
  }

  get itemActions$(): Observable<iEntityCollection> {
    var this_ = this
    return this.authorizedResourceActions$.pipe(
      map((collection: iEntityCollection) => {
        return collection.where({name: this.itemActions})
      }),
      map((collection: iEntityCollection) => {
        let updateIcon = (entity) => {
          _.merge(entity.attributes, this.itemActionIcons[entity.name])
        }
        _.map(collection.entities, _.bind(updateIcon, this_))
        return collection
      })
    )
  }

  get authorizedResourceActions$() {
    return this.authorizedActions$().pipe(
      map((collection: iEntityCollection) => {
        return collection.where({"action-type": "resource"})
      })
    )
  }

  get authorizedCollectionActions$() {
    return this.authorizedActions$().pipe(
      map((collection: iEntityCollection) => {
        return collection.where({"action-type": "collection"})
      })
    )
  }

  private authorizedActions$() {
    let opts = {
      load: false
    }
    let relationshipIdentifier = "resource-actions"
    return this.appResourceConfigurations$.pipe(
      mergeMap((entity: iEntity) => {
        return this.entityService.relationshipProvider.provide$(
          entity,
          relationshipIdentifier,
          opts
        )
      }),
      filter((collection) => !_.isEmpty(collection))
    )
  }

  //Mixin properties
  handleActions(...args: any[]) {}
}
