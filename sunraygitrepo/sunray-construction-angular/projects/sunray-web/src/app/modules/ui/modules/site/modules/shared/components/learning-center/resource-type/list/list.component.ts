import { Observable }                 from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';

import {
  DataService,
  iEntityCollection,
} from '@ceo/entity'

import {
  BaseComponent,
} from '../../../../imports'

@Component({
  moduleId: module.id,
  selector: 'sunray-site-learning-center-resource-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent {
  @Input()
  collection$: Observable<iEntityCollection>

  @Input()
  resourceName: string

  getRoute(entity) {
    var re = /:RESOURCE/gi
    return entity.replace(re, this.resourceName)
  }
}
