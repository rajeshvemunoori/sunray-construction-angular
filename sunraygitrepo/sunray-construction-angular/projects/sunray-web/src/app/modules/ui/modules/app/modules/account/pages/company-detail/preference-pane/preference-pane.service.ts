import * as _         from 'lodash'
import { Observable } from 'rxjs'

import { Injectable } from '@angular/core'

import { entityFeatureSelectors } from '@ceo/entity'

import {
  DataService,
} from '@sunray-ui-app/modules/shared/index'

@Injectable()
export class PreferencePaneService extends DataService {

  preferenceTables = [
    {
      'title': 'Preferences',
      'item': 'company-detail-preference-headers'
    },
    {
      'title': 'Request Settings',
      'item': 'company-detail-request-settings-headers'
    }
  ]

  loadPreferenceTables() {
    let loadPreferences = (table) => {
      return {
        'title': table['title'],
        'attributeEntity$': this.primaryEntity$,
        'configHeaders$':  this.getConfigHeaders$(table['item'])
      }
    }
    return _.map(this.preferenceTables, loadPreferences)
  }

  getConfigHeaders$(item){
    return this.getTableHeader$(item)
  }
}
