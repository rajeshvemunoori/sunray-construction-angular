import * as _ from 'lodash'

import {
  Component, OnInit, Input
} from '@angular/core'
import { NgForm }                   from '@angular/forms'
import {
  FormGroup, FormControl,
  Validators
} from '@angular/forms'

import {
  BehaviorSubject,
} from 'rxjs'

import { NotificationService }      from '../../services'

@Component({
  selector: 'sunray-site-shared-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
  dialogActions$: BehaviorSubject<any> = new BehaviorSubject({action: {name: 'init'}})

  fields: any = {
    'demo-request': [
      "ntosPerMonth", "usingService",
    ],
    'inquiry': [
      "ntosPerMonth", "usingService",
    ],
    'enterprise': [
      "usingSunrayApi", "usingExcel", "bondClaimRights",
    ],
    'support': [
      "workOrderNumber", "filePath", "description",
      "helpOption",
    ]
  }
  ntoScales: any[] = [ "1-5", "6-10", "10+" ]
  usingOptions: any[] = [ "Yes", "No" ]
  helpOptions: any[] = [
    { value: "", viewValue: "Select an option" },
    { value: "work-order-help", viewValue: "Support on a project" },
    { value: "other", viewValue: "Other" },
  ]
  //usingExcel: any
  bondClaimRights: any
  attachment: any

  entityForm: FormGroup = new FormGroup([])
  firstName: FormControl 
  lastName: FormControl
  emailAddress: FormControl
  companyName: FormControl
  phoneNumber: FormControl
  workOrderNambuer: FormControl
  filePath: FormControl
  usingSunrayApi: FormControl
  usingExcel: FormControl
  bondClainRights: FormControl
  ntosPerMonth: FormControl 
  usingService: FormControl
  description: FormControl
  helpOption: FormControl

  entity: any

  @Input()
  formType: any

  @Input()
  form$: any

  @Input()
  dataService: any

  @Input()
  notificationService: any

  ngOnInit() {
    var _this = this
    this.createForm()

    this.dialogActions$.subscribe(event => _this.handleDialogAction(event))
  }

  handleDialogAction(event) {
    switch(event.action.name) { 
      case 'launch': {
        break
      }
      case 'submit': {
        this.onSubmit()
        break
      }
      default: {
        console.log("Not sure what to do with the " + event.action + " action")
        break;
      }
    }
  }

  createForm() {
    this.createFormControls()
    this.createFormGroup()
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required)
    this.lastName = new FormControl('', Validators.required)
    this.companyName = new FormControl('', Validators.required)
    this.emailAddress = new FormControl('', Validators.required)
    this.phoneNumber = new FormControl('', Validators.required)
    let fields = this.fields[this.formType]  

    let buildFormControl = (fieldName) => {
      this[fieldName] = new FormControl('')
    }

    _.map(fields, buildFormControl)
  }

  createFormGroup() {
    let fields = [
      "firstName", "lastName", "companyName", "emailAddress", "phoneNumber",
    ]
    fields = _.concat(fields, this.fields[this.formType])

    let fieldsWithField = (fields, field) => {
      fields[field] = this[field]
      return fields
    }

    let controls = _.reduce(fields, fieldsWithField, {}) 
    this.entityForm = new FormGroup(controls)
  }

  isEnterprise(){
    return "enterprise" == this.formType
  }

  isDemoRequest(){
    return "demo-request" == this.formType
  }

  isInquiry(){
    return "inquiry" == this.formType
  }

  isCustomerSupport(){
    return "support" == this.formType
  }

  onSubmit() {
    if(this.entityForm.valid) {
      this.submitForm(this.entityForm)
        .subscribe((entity) => this.onEntityCreated(entity))
    }
    else {
      this.handleInvalidForm(this.entityForm)
    }
  }

  onEntityCreated(entity) {
    console.log(entity)
  }

  submitForm(form) {
    let data = this.params(form.value)
    this.entity = this.createRecord(data, this.getType())

    if(this.shouldAddToMailchimp()) {
      this.addToMailchimp(form.value)
    }

    return this.entity
  }

  shouldAddToMailchimp() {
    return (this.isDemoRequest() || this.isInquiry())
  }

  handleInvalidForm(form) {
    let markDirty = (control) => {
      control.markAsDirty()
    }
    _.forEach(this.entityForm.controls, markDirty)
    let message = "Please complete the form before submitting."
    this.notificationService.showNotification(message)
  }


  addToMailchimp(formData) {
    this.createRecord(
      this.mailchimpParams(formData),
      this.getType()
    )
  }

  createRecord(params, type){
    let resourceOpts = {
      feature: "app",
      type: type,
      data: params
    }
    return this.dataService.create$(resourceOpts)
  }

  getType() {
    if(this.isDemoRequest() || this.isInquiry()) {
      return "contact-list-members"
    }
    else if(this.isCustomerSupport()){
      return "contact-support-tickets"
    }
    return "contact-list-members"
  }

  params(formData){
    if(this.isDemoRequest() || this.isInquiry()) {
      return this.contactParams(formData)
    }
    else if(this.isCustomerSupport()) {
      return this.ticketParams(formData)
    }
    else if(this.isEnterprise()) {
      return this.enterpriseParams(formData)
    }
    return false
  }

  contactParams(formData) {
    return {
      'first-name': formData.firstName,
      'last-name': formData.lastName,
      'email':  formData.emailAddress,
      'company-name': formData.companyName,
      'phone': formData.phoneNumber,
      'num-of-ntos': formData.ntosPerMonth,
      'using-service': formData.usingService,
      'list-type': 'contactually',
      'lead-type': this.leadType(),
      'num-of-ntos': formData.ntosPerMonth,
      'using-service': formData.usingService,
      'list-type': 'contactually'
    }
  }

  mailchimpParams(formValues) {
    return {
      'email':  formValues.emailAddress,
      'first-name': formValues.firstName,
      'last-name': formValues.lastName,
      'status': 'subscribed',
      'list-type': 'mailchimp',
    }
  }

  ticketParams(formData) {
    return {
      'first-name': formData.firstName,
      'last-name': formData.lastName,
      'email':  formData.emailAddress,
      'company-name': formData.companyName,
      'phone': formData.phoneNumber,
      'subject': '',
      'description': formData.description,
      'attachment': this.attachment,
      'work-order-number': formData.workOrderNumber,
    }
  }

  enterpriseParams(formData) {
    return {
      'first-name': formData.firstName,
      'last-name': formData.lastName,
      'email':  formData.emailAddress,
      'company-name': formData.companyName,
      'phone': formData.phoneNumber,
      'using-sunray-api': formData.usingSunrayApi,
      'using-excel': formData.usingExcel,
      'bond-claim-rights': formData.bondClaimRights,
      'list-type': 'contactually'
    }
  }

  leadType() {
    if(this.isDemoRequest()){
      return 'request_demo'
    } else {
      return 'sales_inquiry'
    }
  }

  attachFile(event) {
    let reader = new FileReader()
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0]
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.attachment = {
          "file_name": file.name,
          "content_type": file.type,
          "content": reader.result.split(',')[1]
        }
      }
    }
  }

  workOrderNumber(formData) {
    return formData.workOrderNumber
  }
}
