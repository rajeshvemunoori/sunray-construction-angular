import * as _ from 'lodash'

import { Component, OnInit } from '@angular/core'

import {
  Mixin,
  PropertyDelegator,
} from '@ceo/shared'

import { BaseComponent } from '../../components'

@Component({
  templateUrl: './base.page.html',
})
@Mixin([PropertyDelegator])
export class BasePage extends BaseComponent {


  // Mixin props
  delegatedProperties: any = {}
  setAllDelegatedProperties(): void {}
}
