import * as _ from 'lodash'

import {
  Component, OnInit, Input
} from '@angular/core';

import {
  TableComponent as SharedTableComponent
} from '@ceo/shared'

@Component({
  selector: 'sunray-ui-app-shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends SharedTableComponent {
  @Input() paginationId: String = "pagination"
  @Input() itemsPerPage: number = 10
  @Input() maxSize: number = 6
  @Input() autoHide: Boolean = true
  @Input() previousLabel: String = "<"
  @Input() nextLabel: String = ">"
  @Input() inlineEdit: boolean

  page: number = 1
  _entities: any = []

  entities(collection) {
    if(collection) {
      this._entities = collection.entities
    }
    return this._entities
  }

  startItemNum() {
    return ((this.page-1) * (this.itemsPerPage)) + 1
  }

  endItemNum() {
    return (this.itemsTillPage() > this.total()) ? this.total() : this.itemsTillPage()
  }

  itemsTillPage() {
    return (this.page * this.itemsPerPage)
  }

  total() {
    return _.size(this._entities)
  }
}
