import { Observable }         from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';

import {
  iEntity,
} from '@ceo/entity';

@Component({
  selector: 'sunray-ui-layout-sidebar-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent implements OnInit {
  @Input()
  userAccount$: Observable<iEntity>

  constructor() { }

  ngOnInit() {
  }
}
