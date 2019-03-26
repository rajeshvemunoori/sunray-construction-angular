import { Observable }                 from 'rxjs'

import {
  Component, OnInit, Input
} from '@angular/core'
import { ActivatedRoute }     from '@angular/router'

import { DataService } from '@sunray-ui-shared'

import {
  BaseComponent as SharedBaseComponent, 
} from '../../../imports'

@Component({
  selector: 'sunray-site-learning-center-resource-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent extends SharedBaseComponent {
  resourceType: string = 'resource'
  contentType: any = "resource"
  resource: any = "florida"

  heading: any = "Heading"
  subHeading: any = "SubHeading"

  collection$: Observable<any>

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setResource()
  }

  setResource() {
    this.dataService.slug$.subscribe(slug => {
      this.resource = slug
      this.collection$ = this.getCollection()
    })
  }

  getCollection(){
    let resourceOpts = {
      feature: "cms",
      type: this.resourceType,
      filter: {
        taxonomy: 'category',
        term: this.resource
      }
    }
    return this.dataService.entityData$(resourceOpts)
  }
}
