import * as _           from 'lodash';

import {
  combineLatest as observableCombineLatest,
  Observable
} from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import {
  DataService as SharedDataService,
} from '@sunray-ui-app/modules/imports'
import { SunrayEntity }     from '@sunray-api';

@Injectable()
export class DataService extends SharedDataService {
  appResourceConfigurationsOpts: any = {
    id: 'company_divisions'
  }

  get divisions$() {
    let selectorName = 'app.entities.companyDivisions.all'
    return this.getStoreData$(selectorName);
  }

  get users$() {
    let selectorName = 'app.entities.users.all'
    return this.getStoreData$(selectorName);
  }

  divisionUserEntities$() {
    return observableCombineLatest(
      this.divisions$,
      this.users$
    ).pipe(map(([divisions, users]) => {
      var this_ = this;
      return _.reduce(divisions.entities, function(mergedEntities, entity) {
        mergedEntities.push(
          this_.divisionUserEntity(entity, users)
        );
        return mergedEntities;
      }, []);
    }));
  }

  divisionUserEntity(entity, users) {
    let entityId = entity.id;
    let filter = {'company-division-ids': entityId}
    let attributes = this.mergeAttributes(entity, users.where(filter));
    return this.sunrayEntity(entityId, attributes, entity.relationships)
  }

  mergeAttributes(division, divisionUsers) {
    let attributes = _.pick(
      division.attributes, 
      ['name']
    );
    attributes['users'] = this.joinEmails(divisionUsers); 
    return attributes;
  }

  joinEmails(users) {
    return _.join(
      _.map(
        users.entities,
        'attributes.email'
      ),' | ');
  }

  sunrayEntity(id, attributes, relationships) {
    let entityAttributes = {
      id: id,
      type: 'company-divisions',
      attributes: attributes,
      relationships: relationships
    }
    return new SunrayEntity(entityAttributes);
  }

  delete(entity) {
    let resourceOpts = {
      feature: "app",
      type: entity.type,
      id: entity.id 
    }

    this.delete$(resourceOpts);
  }
}
