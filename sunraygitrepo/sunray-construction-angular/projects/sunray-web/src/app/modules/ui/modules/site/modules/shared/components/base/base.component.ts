import * as _ from 'lodash'

import { Component, OnInit }        from '@angular/core'

import {
  BaseComponent as ParentBaseComponent,
} from '../../imports'

@Component({
  selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
  templateUrl: "base.component.html",
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent extends ParentBaseComponent { }
