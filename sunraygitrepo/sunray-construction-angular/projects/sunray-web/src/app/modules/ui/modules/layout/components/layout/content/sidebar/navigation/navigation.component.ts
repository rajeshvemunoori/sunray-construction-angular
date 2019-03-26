import * as _ from 'lodash'

import { Observable }         from 'rxjs'

import { Component, OnInit, Input }  from '@angular/core'

import {
  iEntity,
} from '@ceo/entity'

import {
  iNavigationMenu,
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-layout-sidebar-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input()
  menu$: Observable<iNavigationMenu>

  ngOnInit() {}

  /*
  loadMenu$(){
    let resourceOpts = {
      feature: 'cms',
      type: 'menus',
      id: 34
    }
    return this.dataService.get$(resourceOpts)
  }
  */
}
