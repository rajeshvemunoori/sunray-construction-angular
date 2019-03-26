import { Observable }         from 'rxjs';

import { Component, OnInit, Input }  from '@angular/core';

import {
  iEntity,
} from '@ceo/entity'

@Component({
  selector: 'sunray-ui-app-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()
  navigationMenu$: Observable<iEntity>;

  constructor() { }

  ngOnInit() {
  }

}
