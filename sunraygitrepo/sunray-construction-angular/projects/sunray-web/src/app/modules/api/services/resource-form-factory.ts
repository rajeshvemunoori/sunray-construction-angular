// Accepts:
// resourceType 'string'
// formName 'string'
//
// Returns a FormGroup

import * as _ from 'lodash'
import { Observable }   from 'rxjs';

import { Injectable } from '@angular/core';

import {
  ResourceConfigurationFormFactory
} from './resource-configurations/resource-configuration-form-factory';


@Injectable({
  providedIn: 'root'
})
export class ResourceFormFactory {
  constructor(
    private resourceConfigurationFormFactory: ResourceConfigurationFormFactory,
  ) {}

  build$(resource, resourceOpts) {
    return this.resourceConfigurationFormFactory.build$(resource, resourceOpts)
  }
}
