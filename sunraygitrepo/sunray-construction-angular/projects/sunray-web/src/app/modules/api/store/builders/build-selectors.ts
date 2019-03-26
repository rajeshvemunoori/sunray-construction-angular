import * as _ from 'lodash'

import { createSelector, compose } from '@ngrx/store';

import {
  iEntity,
  iEntityCollection,
  entityFeatureSelectors,
} from '@ceo/entity'

export function buildSelectors(selectorService): void {

  // Selector to feature by current selectedEntity from state entity
  let filterByStateSelector = (collectionSelector) => {
    let selectorOne = selectorService.getSelector('app.entities.states.selectedEntity');
    let selectorTwo = selectorService.getSelector(collectionSelector);
    return createSelector(
      selectorOne,
      selectorTwo,
      (selectedState: iEntity, collection: iEntityCollection) => {
        if(!selectedState || !collection) {
          return null;
        }

        let filter = {
          'state-id': selectedState.id
        }
        return collection.where(filter);
      }
    );
  }

  // Selector for app.entities.states.selectedEntityProjectTypesAll'
  ////////////////////////////


  let stateProjectTypesSelectorOpts = {
    name: 'app.entities.states.selectedEntityProjectTypesAll',
    selector: filterByStateSelector('app.entities.projectTypes.all')
  }
  selectorService.addSelector(stateProjectTypesSelectorOpts)

  /*
  let selectorOne = selectorService.getSelector('app.entities.states.selectedEntity');
  let selectorTwo = selectorService.getSelector('app.entities.projectTypes.all');

  let selectSunraySelectedStateProjectTypesAll = createSelector(
    selectorOne,
    selectorTwo,
    (selectedState: iEntity, projectTypes: iEntityCollection) => {
      if(!selectedState || !projectTypes) {
        return null;
      }

      let filter = {
        'state-id': selectedState.id
      }
      return projectTypes.where(filter);
    }
  );

  let selectorOpts = {
    name: 'sunray.entities.states.selectedEntityProjectTypesAll',
    selector: selectSunraySelectedStateProjectTypesAll
  }
  selectorService.addSelector(selectorOpts);
   */

  // Selector for sunray.entities.states.selectedEntityStateRequestTypesAll
  ////////////////////////////

  let stateRequestTypesselectorOpts = {
    name: 'app.entities.states.selectedEntityStateRequestTypesAll',
    selector: filterByStateSelector('app.entities.stateRequestTypes.all')
  }
  selectorService.addSelector(stateRequestTypesselectorOpts);

  /*
  selectorTwo = selectorService.getSelector('sunray.entities.stateRequestTypes.all');

  let newSelector = createSelector(
    selectorOne,
    selectorTwo,
    (selectedState: iEntity, stateRequestTypes: iEntityCollection) => {
      if(!selectedState || !stateRequestTypes) {
        return null;
      }

      let filter = {
        'state-id': selectedState.id
      }
      return stateRequestTypes.where(filter);
    }
  );
  selectorOpts = {
    name: 'sunray.entities.states.selectedEntityStateRequestTypesAll',
    selector: newSelector
  }
  selectorService.addSelector(selectorOpts);
   */


  // Selector for project type request types
  ////////////////////////////

  let projectTypesSelector = selectorService.getSelector('app.entities.projectTypes.all');
  let projectTypeRequestTypesSelector = selectorService.getSelector('app.entities.projectTypeRequestTypes.all');
  //var relationshipName = 'project-type-request-types';

  let relationshipSelector = createSelector(
    projectTypesSelector,
    projectTypeRequestTypesSelector,
    (collectionOne: iEntityCollection, collectionTwo: iEntityCollection) => {
      return collectionOne;
      /*
      if(collectionOne && collectionTwo) {
        let entity = collectionOne.entities[0];
        let relationships = entity.relationships
        return entity;
      }
      else {

        return null;
      }
      */
    }
  );
  let relationshipSelectorOpts = {
    name: 'app.entities.projectTypes.relationshipProjectTypeRequestTypes',
    //selector: projectTypesSelector,
    selector: relationshipSelector
  }
  selectorService.addSelector(relationshipSelectorOpts);

  // Creates selector to filter entities in selector two by passed attribute (foreign key).
  //
  let filterByAttributeSelector = (collectionSelector, attribute) => {
    let selectorOne =  entityFeatureSelectors.primaryEntity;
    let selectorTwo = selectorService.getSelector(collectionSelector);

    return createSelector(
      selectorOne,
      selectorTwo,
      (selectedEntity: iEntity, collection: iEntityCollection) => {
        if(!selectedEntity || !collection) {
          return null;
        }

        let filter = {};
        filter[attribute] = selectedEntity.id;
        return collection.where(filter);
      }
    );
  }

  let selectorsBelongsToOpts = [
    {
      name: 'app.entities.invoices.selectedEntityDocumentRequestFeesAll',
      selectorTwo: 'app.entities.documentRequestFees.all',
      attribute: 'invoice-id',
    },
    {
      name: 'app.entities.companies.selectedEntityAccountingItemsAll',
      selectorTwo: 'app.entities.accountingItems.all',
      attribute: 'resource-id',
    },
    {
      name: 'app.entities.companies.selectedEntityNotariesAll',
      selectorTwo: 'app.entities.notaries.all',
      attribute: 'resource-id',
    },
    {
      name: 'app.entities.companies.selectedEntityCommentsAll',
      selectorTwo: 'app.entities.comments.all',
      attribute: 'resource-id',
    },
    {
      name: 'app.entities.companies.selectedEntityUsersAll',
      selectorTwo: 'app.entities.users.all',
      attribute: 'company-id',
    },
    {
      name: 'app.entities.companies.selectedEntityInvoicesAll',
      selectorTwo: 'app.entities.invoices.all',
      attribute: 'company-id',
    },
    {
      name: 'app.entities.companies.selectedEntityCompanyPrimaryContactsAll',
      selectorTwo: 'app.entities.companyPrimaryContacts.all',
      attribute: 'company-id',
    },
    {
      name: 'app.entities.companies.selectedEntityPayableContactsAll',
      selectorTwo: 'app.entities.companyAccountsPayableContacts.all',
      attribute: 'company-id',
    },
  ];

  _.forEach(selectorsBelongsToOpts, function(selector) {
    let selectorOpts = {
      name: selector.name,
      selector: filterByAttributeSelector(selector.selectorTwo, selector.attribute)
    }
    selectorService.addSelector(selectorOpts);
  });

  // Create selector to filter by relationships for which related entities those
  // don't have foreign key to refer and also have one relationship enity.
  //
  let filterByRelationshipIdSelector = (collectionSelector, relationship) => {
    let selectorOne = entityFeatureSelectors.primaryEntity;
    let selectorTwo = selectorService.getSelector(collectionSelector);
    return createSelector(
      selectorOne,
      selectorTwo,
      (entity: iEntity, collection: iEntityCollection) => {
        if(entity && collection) {
          //@ts-ignore;
          //// This violates the data key on the iEntityRelationships interface.
          //// We are assuming that it is a single resource, but it could have been a
          //// collection.
          let id = entity.relationships[relationship].data.id;
          return collection.find(id)
        }
        else {
          return null;
        }
      }
    );
  }

  let relationshipIdSelectorOpts = [
    {
      name: 'app.entities.companies.selectedEntityBillingAddress',
      selectorTwo: 'app.entities.addresses.all',
      relationship: 'billing-address-attributes'
    },
    {
      name: 'app.entities.companies.selectedEntityPhysicalAddress',
      selectorTwo: 'app.entities.addresses.all',
      relationship: 'physical-address-attributes'
    },
  ];

  _.forEach(relationshipIdSelectorOpts, function(selector) {
    let selectorOpts = {
      name: selector.name,
      selector: filterByRelationshipIdSelector(selector.selectorTwo, selector.relationship)
    }
    selectorService.addSelector(selectorOpts);
  });

  // Create selector to filter by relationships for which related entities those
  // don't have foreign key to refer and also have many relationship enities.
  //
  let filterByRelationshipIdsSelector = (collectionSelector, relationship) => {
    let selectorOne = entityFeatureSelectors.primaryEntity;
    let selectorTwo = selectorService.getSelector(collectionSelector);
    return createSelector(
      selectorOne,
      selectorTwo,
      (entity: iEntity, collection: iEntityCollection) => {
        if(entity && collection) {
          //@ts-ignore;
          //// This violates the data key on the iEntityRelationships interface.
          //// We are assuming that it is a single resource, but it could have been a
          //// collection.
          let ids = _.map(entity.relationships[relationship].data, 'id');
          return collection.where({'id': ids});
        }
        else {
          return null;
        }
      }
    );
  }

  let relationshipIdsSelectorOpts = [
    {
      name: 'app.entities.companies.selectedEntitySignorsAll',
      selectorTwo: 'app.entities.signors.all',
      relationship: 'signors'
    },
  ];

  _.forEach(relationshipIdsSelectorOpts, function(selector) {
    let selectorOpts = {
      name: selector.name,
      selector: filterByRelationshipIdsSelector(selector.selectorTwo, selector.relationship)
    }
    selectorService.addSelector(selectorOpts);
  });
}
