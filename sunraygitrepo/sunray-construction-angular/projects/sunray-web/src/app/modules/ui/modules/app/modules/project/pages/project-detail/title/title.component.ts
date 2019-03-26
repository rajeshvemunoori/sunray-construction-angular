import {
  Component, OnInit, Input
} from '@angular/core'

import {
  Observable
} from 'rxjs'
import {
  mergeMap, filter
} from 'rxjs/operators'

import {
  iEntity
} from '@ceo/entity'

@Component({
  selector: 'sunray-ui-app-project-project-detail-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() primaryEntity$: Observable<iEntity>
  @Input() dataService: any

  customer$: any

  constructor() { }

  ngOnInit() {
    this.customer$ = this.getCustomer$()
  }

  getCustomer$() {
    return this.primaryEntity$.pipe(
      mergeMap(project => {
        return this.dataService.entityRelationshipProvider.provide$(
          project,
          'job',
          {load: false}
        )
      }),
      mergeMap(job => {
        return this.dataService.entityRelationshipProvider.provide$(
          job,
          'client',
          {load: false}
        )
      }),
      filter(client => !_.isNull(client))
    )
  }
}
