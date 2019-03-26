import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import {
  Component,
  Injector,
} from '@angular/core'

import { 
  SharedBasePage as BasePage,
  PageService
} from '@sunray-ui-app/modules/imports'

import { AddressBookPaneService }     from './address-book-pane.service'
import { AddressBookEditPage }        from './address-book-edit'

@Component({
  selector: 'sunray-ui-app-account-company-detail-address-book-pane',
  templateUrl: './address-book-pane.component.html',
  styleUrls: ['./address-book-pane.component.scss'],
  providers: [AddressBookPaneService]
})
export class AddressBookPaneComponent  extends BasePage {

  delegatedProperties: any = {
    dataService: [
      'loadEmptyEntity',
    ],
    pageService: [
      'showDialog', 'ensureCustomElement',
      'buildCustomElement',
    ],
  }

  constructor(
    public pageService: PageService,
    public dataService: AddressBookPaneService,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  addContact(type) {
    this.edit(this.loadEmptyEntity(type))
  }

  edit(event_) {
    let elementName = 'address-book-edit'
    
    this.ensureCustomElement(
      elementName,
      AddressBookEditPage,
      {injector: this.injector}
    )

    let customElement = this.buildCustomElement(
      elementName,
      {
        paneName: event_.name 
      }
    )

    this.showDialog(customElement, this.dialogConfig())
  }

  private dialogConfig() {
    return {
      header: {
        show: true,
        title: 'Project Contacts'
      }
    }
  }

  private emptyEntity() {
    return this.loadEmptyEntity('notaries')
  }
}
