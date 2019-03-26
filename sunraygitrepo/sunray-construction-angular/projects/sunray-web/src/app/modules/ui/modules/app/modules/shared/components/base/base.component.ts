import * as _ from 'lodash'

import { Observable } from 'rxjs'

import {
  Component, OnInit,
} from '@angular/core'

import {
  BaseComponent as ParentBaseComponent,
} from '../../imports'

@Component({
  selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
  templateUrl: "base.component.html",
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent extends ParentBaseComponent {
  private isLaunched: boolean = false

  sidebarMenuItems$: Observable<any>
  menuItemsCount: Array<any>
  childComponents: any = {
    header: false,
    sidebar: false,
    body: true,
    footer: false
  }
}
