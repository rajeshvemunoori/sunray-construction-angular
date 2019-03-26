import {
  Component,
  Injector,
} from '@angular/core'

import { ResourceFormFactory } from '@sunray-api'

import {
  iDialogCustomElementConfig,
} from '@ceo/shared'

import {
  BasePage,
  FormComponent,
  PageService,
  DataService,
  ContactUsFormComponent,
} from '../imports'

@Component({
  selector: 'sunray-ui-site-contact-us-page',
  templateUrl: 'contact-us.page.html',
  styleUrls: ['contact-us.page.scss']
})
export class ContactUsPage extends BasePage {
  heading: any = "Contact Us"
  subHeading: any = "You won't get a robot. We Promise."

  delegatedProperties: any = {
    pageService: [
      'notificationService', 'resourceFormFactory',
      'showDialog', 'defineCustomElement',
      'buildCustomElement',
    ],
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  editContactListMember(formType) {
    let elementName = "contact-list-member-edit-"+formType
    console.log(elementName)
    this.ensureCustomElement(elementName)

    let customElement = this.buildCustomElement(
      elementName,
      this.customElementInputs(formType)
    )

    this.showCustomElement(customElement, elementName)
  }

  ensureCustomElement(elementName) {
    let config = {
      elementName: elementName,
      ctor: ContactUsFormComponent,
      opts: {injector: this.injector},
    }
    this.defineCustomElement(config)
  }

  private showCustomElement(customElement, elementName) {
    let dialogComponent = this.showDialog(customElement, elementName)

    dialogComponent.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

  private customElementInputs(formType): iDialogCustomElementConfig {
    return {
      formType: formType,
      dataService: this.dataService,
      notificationService: this.notificationService,
    }
  }

  loadFields$() {
    let resourceOpts = {
      resourceType: 'contact-list-members',
      formName: 'contact-list-members.edit-mailchimp'
    }
    let fields$ = this.resourceFormFactory.build$(null, resourceOpts)
    return fields$
  }
}
