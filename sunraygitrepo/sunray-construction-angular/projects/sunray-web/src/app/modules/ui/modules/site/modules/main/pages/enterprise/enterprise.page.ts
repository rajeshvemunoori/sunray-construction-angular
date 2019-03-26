import {
  Component,
  Injector,
} from '@angular/core'

import {
  iDialogCustomElementConfig,
} from '@ceo/shared'

import {
  SunrayEntity,
} from '@sunray-api'

import {
  BasePage,
  ContactUsFormModalComponent,
  FormComponent,
  PageService,
  ContactUsFormComponent,
} from '../imports'

import { DataService }            from './data.service'

@Component({
  selector: 'sunray-ui-site-enterprise-page',
  templateUrl: './enterprise.page.html',
  styleUrls: ['./enterprise.page.scss'],
  providers: [DataService],
})
export class EnterprisePage extends BasePage {
  title: any = 'Our Clients Say'
  sections: any = {
    reviews: {
      heading: "Reviews",
      subHeading: "See what some of our amazing customers have to say about SunRay!",
    },
  }

  delegatedProperties: any = {
    pageService: [
      'notificationService',
      'showDialog', 'defineCustomElement',
      'buildCustomElement', 'resourceFormFactory',
    ],
    dataService: ['cmsTestimonials$'],
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  editContactListMember(formType) {
    let form$ = this.buildForm$(formType)
    this.showForm$(formType, form$)
  }

  buildForm$(formType) {
    let entity = new SunrayEntity({})
    let resourceOpts = {
      resourceType: 'contact-list-members',
      formName: 'contact-list-members.edit-mailchimp',
    }

    let form$ = this.resourceFormFactory.build$(entity, resourceOpts)
    form$.subscribe(items => this.checkIt(items))

    return form$
  }

  showForm$(formType, form$) {
    let elementName = 'contact-list-member-edit-element'
    this.ensureCustomElement(elementName)

    let customElement = this.buildCustomElement(
      elementName,
      this.customElementInputs(formType, form$)
    )

    this.showCustomElement(customElement)
  }

  checkIt(items) {
    console.log(items)
  }

  ensureCustomElement(elementName) {
    let config = {
      elementName: elementName,
      ctor: ContactUsFormComponent,
      opts: {injector: this.injector},
    }
    this.defineCustomElement(config)
  }

  private showCustomElement(customElement) {
    let elementName = 'contact-list-member-edit'
    let dialogComponent = this.showDialog(customElement, elementName)

    dialogComponent.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

  private customElementInputs(formType, form$): iDialogCustomElementConfig {
    return {
      formType: formType,
      form$: form$,
      dataService: this.dataService,
      notificationService: this.notificationService,
    }
  }
}
