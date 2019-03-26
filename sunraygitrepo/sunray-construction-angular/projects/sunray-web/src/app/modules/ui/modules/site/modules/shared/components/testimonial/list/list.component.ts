import { Observable }         from 'rxjs'

import {
  Component, OnInit, Input
} from '@angular/core'

import {
  iEntityCollection,
} from '@ceo/entity'

import {
  BaseComponent,
} from '../../../imports'

@Component({
  selector: 'sunray-site-shared-testimonial-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent {
  @Input() collection$: Observable<any>
}
