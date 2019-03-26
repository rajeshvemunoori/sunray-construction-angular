import * as _ from 'lodash'

import { Observable } from 'rxjs'

import { Component }  from '@angular/core'

import {
  BasePage,
  PageService,
  DataService,
} from '../imports'

@Component({
  selector: 'sunray-ui-site-learning-center-page',
  templateUrl: './learning-center.page.html',
  styleUrls: ['./learning-center.page.scss'],
})
export class LearningCenterPage extends BasePage {
  slug: string

  delegatedProperties: any = {
    dataService: [
      'slug$', 'appStates$',
    ],
    pageService: [
      'inflectionService', 'navigate', 'router',
      'kebabCase', 'url'
    ]
  }

  private onResourceSelected(event) {
    let slug = this.kebabCase(event.resource)
    let route = _.join(
      [
        '/learning-center/',
        slug,
        '/',
        this.url.split("/")[3]
      ],
      ''
    )
    this.navigate([route])
  }

  get activeItem(): Observable<string> {
    return _.last(_.split(this.router.url, '/'))
  }
}
