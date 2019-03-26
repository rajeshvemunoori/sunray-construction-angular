import * as _           from 'lodash'

import { Observable }   from 'rxjs'

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
import { PageService }  from '@sunray-ui-shared'

import { DataService }      from './data.service'

@Component({
  selector: 'sunray-ui-app-project-project-detail-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  providers: [DataService],
})
export class ProjectInfoComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'loadEmptyEntity',
      'getProjectJobEntity$',
      'getProjectParticipants$',
      'getTableHeader$',
      'combinedProjectParticipants$',
    ],
  }

  projectJobEntity$: Observable<iEntity>
  projectDetailHeader$: Observable<iEntityCollection>
  projectParticipants$: Observable<iEntityCollection>
  projectParticipantsHeader$: Observable<iEntityCollection>

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  ngOnInit() {
    super.ngOnInit()
    this.loadProjectJobEntity()
    this.loadProjectParticipants()
  }

  loadProjectJobEntity() {
    this.projectJobEntity$ = this.getProjectJobEntity$()
    this.projectDetailHeader$ = this.getProjectDetailHeader$()
  }

  loadProjectParticipants() {
    this.projectParticipants$ = this.dataService.combinedProjectParticipants$()
    this.projectParticipantsHeader$ = this.getProjectParticipantsHeader$()
  }

  getProjectDetailHeader$() {
    let item = "project-info-project-detail-header"
    return this.getTableHeader$(item)
  }

  getProjectParticipantsHeader$() {
    let item = "project-info-project-participants-header"
    return this.getTableHeader$(item)
  }
}
