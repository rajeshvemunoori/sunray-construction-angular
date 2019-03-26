import * as _ from 'lodash'

import { Observable }   from 'rxjs'
import { Store }        from '@ngrx/store'

import { Injectable } from '@angular/core'

import {
  EntitySelectorService,
  entityFeatureSelectors,
  DataService as AppDataService,
  SelectorService,
  entityFeatureSelectors,
} from '@ceo/entity'

import {
  DataService as SharedDataService,
} from '@sunray-ui-app/modules/shared/index'

@Injectable()
export class DataService extends SharedDataService {
  appResourceConfigurationsOpts: any = {
    id: 'users'
  }
  itemActions: any = ["edit"]

  getUserCollection$(){
    let selectorName = 'app.entities.companies.selectedEntityUsersAll'
    return this.getStoreData$(selectorName)
  }

  getUser$(id) {
    let resourceOpts = {
      feature: "app",
      type: "users",
      id: id
    }
    return this.get$(resourceOpts)
  }

  getUserConfigHeaders$() {
    let item = "company-users-headers"
    return this.getTableHeader$(item)
  }

  create$(resourceOpts) {
    this.create$(resourceOpts)
  }
}
