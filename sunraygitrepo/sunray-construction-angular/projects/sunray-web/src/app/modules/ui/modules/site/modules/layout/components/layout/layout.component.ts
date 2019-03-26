import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

import {
  LayoutComponent as UiLayoutComponent,
} from '@sunray-ui-layout'

@Component({
  selector: 'sunray-ui-site-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends UiLayoutComponent {}
