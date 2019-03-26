import * as _ from 'lodash'

import { Component, OnInit } from '@angular/core'

import {
  Mixin,
  PropertyDelegator,
  DataInspector,
} from '@ceo/shared'


@Component({
  templateUrl: './base.component.html',
})
@Mixin([PropertyDelegator, DataInspector])
export class BaseComponent implements OnInit,
  PropertyDelegator, DataInspector {

  ngOnInit() {
    this.setAllDelegatedProperties()
  }

  //Mixin properties
  delegatedProperties: any = {}
  inspectData(...args: any[]) {}
  setDelegatedProperties(...args: any[]): void {}
  setAllDelegatedProperties(): void {}
}

