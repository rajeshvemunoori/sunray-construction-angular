import { Input, Component, OnInit } from '@angular/core';

import {
  BaseComponent,
} from '../../imports'

@Component({
  selector: 'sunray-site-team-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent extends BaseComponent {
  @Input()
  entity: any;
}
