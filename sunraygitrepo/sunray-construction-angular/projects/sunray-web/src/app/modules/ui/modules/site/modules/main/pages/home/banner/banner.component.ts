import { Observable }                 from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';

import { BaseComponent } from '../../imports';

@Component({
  selector: 'sunray-ui-site-home-page-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent extends BaseComponent {
  windowHeight: any = window.innerHeight;
  
  @Input()
  collection$: Observable<any>;

  private bannerHeight() {
    return this.windowHeight - 300;
  }
}
