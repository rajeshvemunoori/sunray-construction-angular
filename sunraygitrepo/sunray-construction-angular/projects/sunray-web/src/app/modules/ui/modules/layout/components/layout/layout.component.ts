import * as _ from 'lodash'

import { Observable } from 'rxjs'

import {
  Component,
  OnInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
} from '@angular/core'

import {
  PageService,
} from '../imports'

import {
  LayoutService,
} from '../../services'

@Component({
  selector: 'sunray-ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [
    LayoutService,
  ],
})
export class LayoutComponent
  implements OnInit, AfterViewChecked, AfterViewInit, DoCheck {

  private navigationMenu$: Observable<any>

  constructor(
    public layoutService: LayoutService,
  ) {}

  ngOnInit() {
    //console.log("ngOnInit in LayoutComponent")
  }


  ngAfterViewInit() {
    //console.log("ngAfterViewInit in LayoutComponent")
  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked in LayoutComponent")
  }

  ngDoCheck() {
    //console.log("ngDoCheck in LayoutComponent")
  }

}
