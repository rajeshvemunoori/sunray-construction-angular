import * as _ from "lodash"

import { Observable } from 'rxjs'

import {
  Component, OnInit,
  Input, Output, EventEmitter,
} from '@angular/core'

import { slugify }   from '@ceo/core'
import { iEntity, iEntityCollection }   from '@ceo/entity'

import { SunrayEntity } from '@sunray-api'

@Component({
  selector: 'sunray-ui-site-document-deadline-widget-project-role-deadlines',
  templateUrl: './project-role-deadlines.component.html',
  styleUrls: ['./project-role-deadlines.component.scss']
})
export class ProjectRoleDeadlinesComponent implements OnInit {
  statutoryDocuments: any[] = [
    {
      name: "NTO",
      description: "Notice to Owner/Notice to Contractor should be served to the owner and required recipients forty five days (45 days) from first day of start of the project.",
      deadline_rule: "45 Days from date of first furnishing",
    },
    {
      name: "Mechanic's Lien",
      description: "A Subcontractor has only Ninety Days (90 days) from the last day materials and/or labor was furnishing to record a Construction Lien known in the state of Florida.",
      deadline_rule: "90 Days from date of last furnishing",
    },
  ]

  @Input()
  statutoryDocuments$: Observable<iEntityCollection>

  @Input()
  projectRoles$: SunrayEntity[]

  @Input()
  projectRole: SunrayEntity

  @Input()
  jobType: SunrayEntity

  @Input()
  jobTypes$: Observable<iEntityCollection>

  @Input()
  projectTypeRequestTypes$: Observable<iEntityCollection>

  @Output()
  itemEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  private tabId(entity) {
    debugger
    let id = _.lowerCase(_.join(entity.name, "-"))
    debugger
    return id
  }

  private imageName(entity) {
    return `sunray/project-roles/${slugify(entity.name)}`
  }

  private isSelectedEntity(entity) {
    return this.projectRole == entity
  }

  private noSelectedEntity() {
    return this.projectRole == null
  }

  private onCalculateDeadlines() {
    let event = {
      action: 'calculateDeadlines'
    }
    this.itemEmitter.emit(event)
  }
}
