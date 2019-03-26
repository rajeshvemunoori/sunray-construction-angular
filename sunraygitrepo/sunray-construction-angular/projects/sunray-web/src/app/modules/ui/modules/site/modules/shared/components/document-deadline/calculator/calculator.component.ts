import * as _ from "lodash"

import { Observable } from 'rxjs'

import {
  map,
} from 'rxjs/operators'

import {
  Component, OnInit,
  ViewEncapsulation, Input
} from '@angular/core'
import {
  FormsModule, NgForm, NG_ASYNC_VALIDATORS,
  Validator, FormControl, ValidationErrors
} from '@angular/forms'
import { DatePipe }                      from '@angular/common'

import { NgbModal, NgbActiveModal }      from '@ng-bootstrap/ng-bootstrap'
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

import { NgbDateNativeAdapter } from '@ceo/shared'
import {
  DataService,
  JsonApiEntity,
  iEntity,
  iEntityCollection,
  EntityCollection,
} from '@ceo/entity'

import { SunrayEntity }         from '@sunray-api'

import { BaseComponent } from '../../../imports'

import { ListComponent }                 from '../list/list.component'
import { DetailComponent }               from '../detail/detail.component'
import { DocumentTypeService }           from './document-type.service'


@Component({
  selector: 'sunray-site-document-deadline-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  providers: [DocumentTypeService]
})
export class CalculatorComponent extends BaseComponent {
  documentTypes: JsonApiEntity[] = []
  documentType: any
  selectedDocuments: any[] = []
  show: boolean = false
  dueDateTypes$: Observable<any>

  @Input()
  states$: Observable<iEntityCollection>

  @Input()
  state$: Observable<iEntity>

  @Input()
  jobTypes$: Observable<iEntityCollection>

  @Input()
  projectRoles$: Observable<iEntityCollection>

  @Input()
  stateRequestTypes$: Observable<iEntityCollection>

  @Input()
  statutoryDocuments$: Observable<iEntityCollection>

  jobLocations = { "displayText": "Job Location",
                  "values": ["Florida", "NY", "California"]
                 }
  hiredBy      = { "displayText": "Hired By",
                  "values": ['Contractor', "General Contractor", "Sub-Contractor"]
                 }
  projectTypes = { "displayText": "Project Types",
                  "values": ["General", "Public", "Private"]
                 }
  roles        = { "displayText": "Your Role",
                  "values": ['Contractor', "General Contractor", "Sub-Contractor"]
                 }
  constructor(
    private modalService: NgbModal,
    private datePipe: DatePipe,
    private dateAdapter: NgbDateNativeAdapter,
    private documentTypeService: DocumentTypeService,
    private dataService: DataService,
  ) {
    super()
  }

  ngOnInit() {
    this.loadDocumentTypes()
    this.setDueDateTypes()
  }

  loadDocumentTypes() {
    this.documentTypes = this.documentTypeService.getDocumentTypes()
    this.documentType = {}
  }

  setDueDateTypes() {
    this.dueDateTypes$ = this.stateRequestTypes$
      .pipe(
        map(collection => this.uniqueDueDateTypes(collection)),
      )
  }

  uniqueDueDateTypes(collection) {
    let getDueDateType = (entity) => {
      return entity.dueDateType
    }

    let dueDateTypes = _.uniq(_.map(collection.entities, getDueDateType))

    let buildDueDateType = (dueDateType) => {
      let attributes = {
        dueDateType: dueDateType
      }
      let data = {
        id: dueDateType,
        attributes: attributes,
        type: 'due-date-types'
      }
      return new SunrayEntity(data)
    }
    let entities = _.map(dueDateTypes, buildDueDateType)
    return new EntityCollection(entities)
  }

  displayInformation() {
    this.show = !this.show
  }

  onSubmit(formData: NgForm){
    // If one item --
    // DeadlineResultListComponent
    // If many items:
    // DeadlineResultComponent
    this.addToMailchimp(this.mailchimpParams(formData.value))
    this.calculateDeadlines()

    var component = null
    var opts = {}

    switch(this.selectedDocuments.length){
      case 1: {
        component = DetailComponent
        break
      }
      case 2: case 3: {
        component = ListComponent
        opts = { size: 'lg', windowClass: 'modal-adaptive' }
        break
      }
      default: {}
    }

    if(component) {
      let modalRef = this.modalService.open(component, opts)
      modalRef.componentInstance.selectedDocumentTypes = this.selectedDocuments
    }
  }

  addToMailchimp(params) {
    let resourceOpts = {
      feature: "app",
      type: "contact_list_members",
      data: params
    }
    this.dataService.create$(resourceOpts)
  }

  mailchimpParams(formValues) {
    return {
      'email':  formValues.emailAddress,
      'list-type': 'mailchimp',
      'status': 'subscribed',
      'first-name': formValues.firstName,
      'last-name': formValues.lastName
    }
  }

  showAlert() {
    alert("it looks like you are past yoru deadlines for this project. Dont let this happen again, sign up today and we will help!")
  }

  calculateDeadlines() {
    var documentSelected = []
    var allDocumentTypes = this.documentTypes
    allDocumentTypes.forEach(function (value) {
      let date = value.getAttr('submissionDate')
      if(date != null){
        documentSelected.push(value)
      }
    })
    this.selectedDocuments = documentSelected
  }
}
