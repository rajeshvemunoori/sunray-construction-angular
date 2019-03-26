import { Observable } from 'rxjs'

import {
  Component,
} from '@angular/core'

import { BaseComponent } from '../base/base.component'

@Component({
  selector: 'sunray-site-learning-center-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent extends BaseComponent {
  resourceType: string = 'videos'
  contentType: any = "video"
  resource: any = "florida"

  heading: any = "Videos"
  subHeading: any = "View & Download our Videos on Florida Lien Law."
}
