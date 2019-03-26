import { Observable }                 from 'rxjs'

import {
  Component, OnInit, Input
} from '@angular/core'

import { BaseComponent } from '../base/base.component'

@Component({
  selector: 'sunray-site-learning-center-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.scss']
})
export class WebinarComponent extends BaseComponent {
  resourceType: string = 'recorded-webinars'
  contentType: any = "webinar"
  resource: any = "florida"

  heading: any = "Webinars"
  subHeading: any = "Watch our previous webinars for free"
}
