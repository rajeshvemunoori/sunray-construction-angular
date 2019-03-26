import * as _           from 'lodash'

import { Observable }   from 'rxjs'
import { mergeMap }     from 'rxjs/operators'

import {
  Component,
  Injector,
} from '@angular/core'

import {
  iEntity, iEntityCollection,
} from 'ceo-entity'

import {
  SharedBasePage as BasePage
} from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-project-project-detail-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'getTableHeader$',
      'primaryEntity$',
      'entityRelationshipProvider',
    ],
  }

  collection$: Observable<iEntity>
  header$: Observable<iEntityCollection>

  ngOnInit() {
    super.ngOnInit()
    this.loadRequestedDocuments()
  }

  loadRequestedDocuments() {
    this.collection$ = this.getCollection$()
    this.header$ = this.getHeader$()
  }

  getCollection$() {
    return this.primaryEntity$.pipe(
      mergeMap(entity => {
        return this.entityRelationshipProvider.provide$(
          entity,
          'comments',
          {load: false}
        )
      })
    )
  }

  getHeader$() {
    let item = "project-detail-notes-header"
    return this.getTableHeader$(item)
  }
}
