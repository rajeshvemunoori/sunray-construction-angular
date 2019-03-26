import * as _ from "lodash";

import { Observable } from 'rxjs';

import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';


@Component({
  selector: "sunray-ui-site-layout-sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @Input()
  menuItems$: Observable<any>;
}
