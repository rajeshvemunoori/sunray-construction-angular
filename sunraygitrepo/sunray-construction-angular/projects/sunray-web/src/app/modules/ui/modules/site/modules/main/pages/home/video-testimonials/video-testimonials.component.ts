import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../imports';

@Component({
  selector: 'sunray-ui-site-home-page-video-testimonials',
  templateUrl: './video-testimonials.component.html',
  styleUrls: ['./video-testimonials.component.scss']
})
export class VideoTestimonialsComponent extends BaseComponent {
  @Input()
  section: any;

}
