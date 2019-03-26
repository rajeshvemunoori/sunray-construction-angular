import * as _ from "lodash";

import { Component } from '@angular/core';

import { slugify }      from '@ceo/core';

import { SharedSelectListComponent } from '../../../imports'

@Component({
  selector: 'sunray-ui-site-project-role-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent extends SharedSelectListComponent {
  private imageName(entity) {
    return `sunray/project-roles/${slugify(entity.name)}`;
  };
}
