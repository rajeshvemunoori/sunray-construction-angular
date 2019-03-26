import * as _ from "lodash"

import { Component } from '@angular/core'

import { slugify }      from '@ceo/core'

import { SharedSelectListComponent } from '../../../imports'

@Component({
  selector: 'sunray-ui-site-job-type-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent extends SharedSelectListComponent {
  imageName(entity) {
    return `sunray/job-types/${slugify(entity.name)}`
  }
}
