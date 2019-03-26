import { Observable }                 from 'rxjs'

import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { iEntityCollection } from '@ceo/entity'

import { BaseComponent } from '../../base/base.component'

@Component({
  selector: 'sunray-site-gallery-image-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  animations: [
    trigger('hideShowAnimator', [
      state('true' , style({ opacity: 1 })), 
      state('false', style({ opacity: 0 })),
      transition('0 => 1', animate('.5s')),
      transition('1 => 0', animate('.9s'))
    ])
  ],
})
export class SlideShowComponent extends BaseComponent {
  @Input()
  collection$: Observable<iEntityCollection>

  currentImage: any;
  
  onSlideChange(event) {}

  ngOnInit() {
    super.ngOnInit()
    console.log("the slide show")
    this.inspectData(this.collection$)
  }
}
