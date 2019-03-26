import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import {
  Component,
  Injector,
} from '@angular/core'

import { FormComponent } from '@ceo/shared'
import { snakeCase }     from '@ceo/core'
import { iEntity }       from '@ceo/entity'

import {
  SharedBasePage as BasePage,
  PageService
} from '@sunray-ui-app/modules/imports'

import { ProfilePaneService }     from './profile-pane.service'
import { CompanyEditPage }        from '../../company-edit'

@Component({
  selector: 'sunray-ui-app-account-company-detail-profile-pane',
  templateUrl: './profile-pane.component.html',
  styleUrls: ['./profile-pane.component.scss']
})
export class ProfilePaneComponent extends BasePage {
  delegatedProperties: any = {
    profilePaneService: [
      'primaryEntity$',
      'attributeEntity$',
      'getAttributeEntity$',
      'loadEmptyEntity',
      'loadEntity',
      'contacts',
      'getTableHeader$',
      'delete$',
      'ri',
      'entity',
    ],
    pageService: [
      'showDialog', 'ensureCustomElement',
      'buildCustomElement', 'resourceFormFactory',
    ],
  }

  searchAttributes: any={}
  _contacts : any
  payableContacts: any
  primaryContacts: any

  constructor(
    public pageService: PageService,
    public profilePaneService: ProfilePaneService,
    private injector: Injector,
  ) {
    super(pageService, profilePaneService)
  }

  ngOnInit() {
    super.ngOnInit()
    this.loadEntity()
    this._contacts = this.contacts
  }

  search(event, contact) {
    contact.searchAttributes = {
      'first-name': event.searchText,
      'last-name': event.searchText,
      'email': event.searchText
    }
  }

  get contactDetailHeader$() {
    let item = 'company-detail-contact-details-headers'
    return this.getTableHeader$(item)
  }

  triggerAction(event_) {
    if(event_.action == "edit") {
      this.editContact(event_.entity)
    }
    else if(event_.action == "destroy") {
      this.delete$(
        this.ri(event_.entity)
      )
    }
  }

  getPatchValues(entity) {
    return _.reduce(entity.attributes, function(values, value, key) {
      values[_.camelCase(key)] = value
      return values
    }, {})
  }

  editCompany() {
    let elementName = 'company-edit'
    this.ensureCustomElement(
      elementName,
      CompanyEditPage,
      {injector: this.injector}
    )

    let customElement = this.buildCustomElement(
      elementName,
      {
        paneName: 'Company Info'
      }
    )
    this.showDialog(customElement, this.dialogConfig())
  }

  editContact(entity: iEntity) {
    let elementName = entity.type+"-edit"
    this.ensureCustomElement(
      elementName,
      FormComponent,
      {injector: this.injector}
    )

    let customElement = this.buildCustomElement(
      elementName,
      {
        inputGroup$: this.loadFields$(entity),
        dataService: this.profilePaneService,
        entity: entity,
        defaultParams: this.defaultParams()
      }
    )
    this.showDialog(customElement, elementName)
  }

  defaultParams() {
    return {
      company_id: this.entity.id
    }
  }

  loadFields$(entity): Observable<InputType> {
    let resourceOpts = {
      resourceType: snakeCase(entity.type),
      formName: entity.type+".edit"
    }
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }

  private showCustomElement(
    customElement,
    elementName,
    dialogConfig
  ) {
    let dialogComponent = this.showDialog(customElement, dialogConfig)

    dialogComponent.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

  private dialogConfig() {
    var name = this.entity.name
    return {
      header: {
        show: true,
        title: `Company Details - ${name}`
      },
      footer: {
        show: true,
        actions: [
          {
            text: "Save",
            className: "btn btn-green"
          },
          {
            text: "Cancel",
            className: "btn btn-blue"
          }
        ]
      }
    }
  }
}
