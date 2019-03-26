import * as _ from 'lodash'

import { Observable }         from 'rxjs';

import { Component, OnInit, Input }  from '@angular/core';

import {
  DataService,
  iEntity,
} from '@ceo/entity';

@Component({
  selector: 'sunray-ui-app-layout-sidebar-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input()
  menu$: Observable<iEntity>;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }

  /*
  loadMenu$(){
    let resourceOpts = {
      feature: 'cms',
      type: 'menus',
      id: 34
    }
    return this.dataService.get$(resourceOpts);
  }
  */
}
