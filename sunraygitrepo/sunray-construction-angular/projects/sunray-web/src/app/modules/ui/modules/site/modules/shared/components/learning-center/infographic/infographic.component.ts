import {
  Component,
} from '@angular/core'

import { BaseComponent } from '../base/base.component'

@Component({
  selector: 'sunray-site-learning-center-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.scss']
})
export class InfographicComponent extends BaseComponent {
  resourceType: string = 'infographics'
  contentType: any = "infographic"
  resource: any = "florida"

  heading: any = "Infographics"
  subHeading: any = "Browse & Download our Infographics on Florida Lien Law."
}
