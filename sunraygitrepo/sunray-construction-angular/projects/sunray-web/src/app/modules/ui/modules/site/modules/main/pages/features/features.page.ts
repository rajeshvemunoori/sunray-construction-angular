import * as _ from 'lodash'

import { Component } from '@angular/core'

import { BasePage } from '../imports'

import { featureFeatures }           from './feature-features'
import { featureDetailedFeatures }   from './feature-detailed-features'
import { featureGuarantees }         from './feature-guarantees'

@Component({
  selector: 'sunray-ui-site-features-page',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss']
})
export class FeaturesPage extends BasePage {
  features: any[] = featureFeatures
  featureDetails: any[] = featureDetailedFeatures
  featureGuarantees: any[] = featureGuarantees
  featureSubsetSize: number = 4

  leftSideFeatures() {
    let items = _.slice(this.features, 0, this.featureSubsetSize)
    return items
  }

  rightSideFeatures() {
    return _.slice(this.features, this.featureSubsetSize)
  }
}
