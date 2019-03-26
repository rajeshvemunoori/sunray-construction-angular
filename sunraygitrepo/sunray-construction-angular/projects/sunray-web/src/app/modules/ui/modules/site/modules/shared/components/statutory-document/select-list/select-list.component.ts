import * as _ from "lodash"

import { Component } from '@angular/core'

import { slugify }      from '@ceo/core'

import { SharedSelectListComponent } from '../../../imports'

@Component({
  selector: 'sunray-ui-site-statutory-document-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']

})
export class SelectListComponent extends SharedSelectListComponent {
  private icon(entity) {
    return `sunray/statutory-documents/${slugify(entity.requestType)}`
  }

  private learnMoreLink(entity) {
    return `/documents/${entity.requestTypeSlug}`
  }
}
