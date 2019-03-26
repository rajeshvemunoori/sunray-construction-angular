import { Observable }         from 'rxjs'

import { Component, OnInit, Input }  from '@angular/core'

import {
  iEntity,
} from '@ceo/entity'

import {
  iNavigationMenu,
} from '@ceo/shared'

import { iDataService } from '@sunray-ui-shared'

@Component({
  selector: 'sunray-ui-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()
  dataService: iDataService

  constructor() { }

  ngOnInit() {
  }

}
