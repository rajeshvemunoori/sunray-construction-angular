import * as _ from 'lodash'

import {
  Observable,
  of as observableOf,
} from 'rxjs'

import {
  map,
} from 'rxjs/operators'

import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'

import {
  slugify,
} from '@ceo/core'

import {
  Breadcrumb
} from '@ceo/shared'

import { BaseComponent } from '../../../../../imports'

@Component({
  selector: 'sunray-site-project-deadline-widget-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends BaseComponent {
  @Input() projectResolver: any
  breadcrumb$: Observable<Breadcrumb>
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    super.ngOnInit()
    this.breadcrumb$ = this.buildBreadcrumb$()
  }

  buildBreadcrumb$() {
    return this.projectResolver.projectType$.pipe(
      map(projectType => this.attributesBreadcrumb(projectType)),
    )
  }

  private attributesBreadcrumb(projectType) {
    let buildBreadcrumbItem = (attribute) => {
      let value = projectType[attribute.entityAttr]
      if(value) {
        return {
          displayValue: value.name,
          isActive: true, 
          url: slugify(attribute.name)
        }
      }
      else {
        return null
      }
    }

    let items = _.compact(
      _.map(this.projectResolver.attributes, buildBreadcrumbItem)
    )
    return new Breadcrumb(items)
  }
}
