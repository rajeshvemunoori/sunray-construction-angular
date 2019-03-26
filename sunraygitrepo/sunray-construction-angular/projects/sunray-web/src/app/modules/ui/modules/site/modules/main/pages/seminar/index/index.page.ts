import { Component } from '@angular/core'

import { BasePage } from '../../imports'

@Component({
  selector: 'sunray-site-seminar-index-page',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class IndexPage extends BasePage {
  term: any = 'seminars'
  testimonialHeading: any = 'See what our thousands of users are saying about us'

  sections: any = {
    reviews: {
      heading: "Reviews",
      subHeading: "See what some of our amazing customers have to say about SunRay!",
    },
  }

  delegatedProperties: any = {
    dataService: [
      'cmsSeminars$',
      'cmsTestimonials$',
    ]
  }
}

