import * as _ from 'lodash';

import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sunray-ui-site-layout-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public collection$: Observable<any>;

  constructor() {}

  ngOnInit() {
  }
}
