import * as _ from 'lodash'

import { Observable } from 'rxjs'

import {
  Component,
} from '@angular/core'

import { BaseComponent } from '../base/base.component'

@Component({
  selector: 'sunray-site-learning-center-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent extends BaseComponent {
  startPage: number = 0
  paginationLimit: number = 1

  resourceType: string = 'ebooks'
  contentType: any = "ebook"
  resource: any = "florida"

  heading: any = "E-Books"
  subHeading: any = "Browse & Download our Informative E-Books on Florida Lien Law."

  loadMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3
  }

  paginate(collection) {
    return _.chunk(collection, 3)
  }
}
