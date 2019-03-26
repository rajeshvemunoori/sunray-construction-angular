import {
  Observable,
} from 'rxjs'

import {
  Component,
} from '@angular/core'

import {
  iEntityCollection,
} from '@ceo/entity'

import {
  FormFactory,
} from '@ceo/shared'

import {
  SunrayEntity,
} from '@sunray-api'

import {
  BasePage,
  PageService,
  DocumentTypeProvider,
  ProjectTypeResolver,
} from '../imports'

import { DataService } from './data.service'

@Component({
  selector: 'sunray-ui-site-deadline-calculator',
  templateUrl: './deadline-calculator.page.html',
  styleUrls: ['./deadline-calculator.page.scss'],
  providers: [
    DataService,
  ],
})
export class DeadlineCalculatorPage extends BasePage {
  steps$: Observable<any>
  documentTypes$: Observable<iEntityCollection>
  form$: any
  formModel: any
  form: any

  delegatedProperties: any = {
    pageService: [
      'resourceFormFactory',
    ],
    dataService: [
      'appStates$',
      'cmsPage$',
      'project$',
    ],
    projectTypeResolver: [
      'projectType$',
      'documentTypes$',
    ]
  }

  sections: any = {
    deadlineCalculator: {
      heading: "Let us help you find your document deadlines.",
      subHeading: "Simply fill in the details below and never miss a deadline again!!"
    },
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    public documentTypeProvider: DocumentTypeProvider,
    public projectTypeResolver: ProjectTypeResolver,
    public formFactory: FormFactory,
  ) {
    super(pageService, dataService)
  }

  ngOnInit() {
    this.setAllDelegatedProperties()
    this.buildSteps()
    this.setupForm()
  }

  buildSteps() {
    this.steps$ = this.projectTypeResolver.values$
    let buildStep = (attribute) => {
      return attribute
    }

    this.steps = _.map(this.projectTypeResolver.attributes, buildStep)
  }

  setupForm() {
    let entity = new SunrayEntity({})
    let resourceOpts = {
      resourceType: 'contact-list-members',
      formName: 'contact-list-members.edit-mailchimp',
    }

    this.form$ = this.resourceFormFactory.build$(entity, resourceOpts)

    this.form$.subscribe(form => {
      console.log("Set the form")
      this.form = form
    })

    this.formModel = this.formFactory.build()
  }
}
