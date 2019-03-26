import { Observable }   from 'rxjs'

import { Component, OnInit, Input } from '@angular/core'

import { iEntity }              from '@ceo/entity'

import { BaseComponent }  from '../../imports'

@Component({
  selector: 'sunray-ui-site-state-page-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends BaseComponent {
  @Input()
  state$: Observable<iEntity>

  @Input()
  stateContent$: Observable<iEntity>

  dataReady: boolean = false

  onImageLoad() {
    this.dataReady = true
  }

  onRouteEvent(event) {
    let url  = event.url
    console.log("on route event" + url)
  }

}
