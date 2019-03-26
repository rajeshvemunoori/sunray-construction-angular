import { Observable }         from 'rxjs'

import {
  Input, Component,
  OnInit, ViewEncapsulation,
  Output, EventEmitter,
} from '@angular/core'

import { NgbModal, NgbActiveModal }   from '@ng-bootstrap/ng-bootstrap'

import {
  BaseComponent,
} from '../../imports'


@Component({
  selector: 'sunray-site-team-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MemberListComponent extends BaseComponent {
  @Input()
  collection$: Observable<any>

  @Output()
  entitySelected: EventEmitter<any> = new EventEmitter();

  onClickEntity(entity) {
    this.selectEntity(entity)
  }

  selectEntity(entity) {
    let event = {
      entity: entity,
    }
    this.entitySelected.emit(event)
  }
}
