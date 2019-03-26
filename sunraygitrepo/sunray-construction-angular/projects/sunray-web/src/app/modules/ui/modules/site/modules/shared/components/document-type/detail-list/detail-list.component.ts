import {
  Observable,
} from 'rxjs'

import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'

import {
  iEntityCollection,
} from '@ceo/entity'

import { BaseComponent } from '../../../imports'

@Component({
  selector: 'sunray-site-document-type-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent extends BaseComponent {
  @Input() collection$: Observable<iEntityCollection>
  @Output() onCalculateDeadlinesRequested: EventEmitter<any> = new EventEmitter()

  onCalculateDeadlines() {
    this.onCalculateDeadlinesRequested.emit()
  }
}
