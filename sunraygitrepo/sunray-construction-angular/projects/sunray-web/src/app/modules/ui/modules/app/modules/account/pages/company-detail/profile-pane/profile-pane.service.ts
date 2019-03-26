import * as _ from 'lodash'

import {
  combineLatest as observableCombineLatest,
  Observable
} from 'rxjs'
import {
  map, filter
} from 'rxjs/operators'

import { Injectable } from '@angular/core'

import { iEntity }    from '@ceo/entity'
import { snakeCase }  from '@ceo/core'

import { SunrayEntity } from '@sunray-api'
import {
  DataService as SharedDataService,
} from '@sunray-ui-app/modules/imports'

@Injectable({
  providedIn: 'root'
})
export class ProfilePaneService extends SharedDataService {
  contactTypes = [
    { 
      'type': 'company-primary-contacts',
      'selector': 'app.entities.companies.selectedEntityCompanyPrimaryContactsAll',
      'title': 'Company Primary Contacts',
      'item': 'company-detail-primary-contacts-headers'
    },
    { 
      'type': 'company-accounts-payable-contacts',
      'selector': 'app.entities.companies.selectedEntityPayableContactsAll',
      'title': 'Company Payable Contacts',
      'item': 'company-detail-payable-contacts-headers'
    }
  ]

  get billingAddress$() {
    let selector = 'app.entities.companies.selectedEntityBillingAddress'
    return this.getStoreData$(selector)
  }

  get physicalAddress$() {
    let selector = 'app.entities.companies.selectedEntityPhysicalAddress'
    return this.getStoreData$(selector)
  }

  get contacts(): any[] {
    let loadContacts = (type) => {
      this.appResourceConfigurationsOpts = {
        id: snakeCase(type['type'])
      }
      return {
        'type': type['type'],
        'title': type['title'],
        'contacts$': this.getContacts$(type['selector']),
        'header$': this.getContactsHeader$(type['item']),
        'searchAttributes': {},
        'itemActions$': this.itemActions$
      }
    }

    return _.map(this.contactTypes, loadContacts)
  }

  getContacts$(selectorName){
    return this.getStoreData$(selectorName)
  }

  getContactsHeader$(item) {
    return this.getTableHeader$(item)
  }

  get attributeEntity$() {
    return this.mergeEntities$()
  }

  mergeEntities$() {
    return observableCombineLatest(
      this.primaryEntity$,
      this.billingAddress$,
      this.physicalAddress$
    ).pipe(filter(([company, billingAddress, physicalAddress]) => {
      return company && billingAddress && physicalAddress
    }),
      map(([company, billingAddress, physicalAddress]) => {
      let attr = this.mergeAttributes(company, billingAddress, physicalAddress)
      return this.sunrayEntity(attr)
    }),)
  }

  mergeAttributes(company, billingAddress, physicalAddress) {
    let attributes = _.pick(
      company.attributes,
      [
        'parent-company-name', 
        'primary-phone-number', 
        'fax-number',
        'alternate-phone-number'
      ]
    )
    let attributeName = 'full-address'
    attributes['physical-address.' + attributeName ] = physicalAddress[attributeName]
    attributes['billing-address.' + attributeName ] = billingAddress[attributeName]
    return attributes
  }

  sunrayEntity(attributes) {
    let entityAttributes = {
      id: 1,
      type: 'company-contact-details',
      attributes: attributes
    }
    return new SunrayEntity(entityAttributes)
  }
}
