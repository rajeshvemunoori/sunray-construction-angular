import { Component } from '@angular/core'
import { NgForm }            from '@angular/forms'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { NgbModal, NgbActiveModal }   from '@ng-bootstrap/ng-bootstrap'

import { DataService }          from '@ceo/entity'

import {
  LoginFormComponent,
  CongratsPopupComponent,
} from '../../../shared'

import { BasePage } from '../imports'

@Component({
  selector: 'signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss']
})
export class SignupPage extends BasePage {
  entityForm: FormGroup
  firstName: FormControl 
  lastName: FormControl
  email: FormControl
  companyName: FormControl
  phoneNumber: FormControl
  accept: FormControl

  delegatedProperties: any = {
    pageService: ['notificationService', 'showNotification', 'modalService']
  }
  
  ngOnInit() {
    this.setAllDelegatedProperties()
    this.createForm()
  }

  createForm() {
    this.createFormControls()
    this.createFormGroup()
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required)
    this.lastName = new FormControl('', Validators.required)
    this.companyName = new FormControl('', Validators.required)
    this.email = new FormControl('', Validators.required)
    this.phoneNumber = new FormControl('', Validators.required)
    this.accept = new FormControl('', Validators.required)
  }

  createFormGroup() {
    this.entityForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      companyName: this.companyName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      accept: this.accept
    })
  }

  onSubmit() {
    this.handleSubmission()
  }

  handleSubmission(){
    if(!this.entityForm.valid) {
      this.showNotification(
        "Please complete the form, accept privacy and terms before submitting."
      )
    }
    else if(this.entityForm.controls.accept.value) {
      this.processFormSubmission()
      this.showNotification(
        "Signup successful."
      )
    }
    else {
      this.showNotification(
        "Please accept privacy and terms before submitting."
      )
    }
  }

  processFormSubmission(){
    let resourceOpts = {
      feature: 'app',
      type: "user-registration",
      data: this.registrationParams()
    }
    this.dataService.create$(resourceOpts)
  }

  registrationParams() {
    return {
       "company": {
          "name": this.companyName.value,
	        "parent_company_name": "",
	        "primary_phone_number": "1234567890",
	        "fax_number": "",
	        "alternate_phone_number": "1234567890",
	        "physical_address_attributes": {
	           "id": "",
	           "status": "complete",
	           "street_address_1": "test",
	           "street_address_2": "test",
	           "city": "Miami",
	           "state_id": "Florida",
	           "zip": "123456"
	         },
	        "billing_address_attributes": {
	          "same_as_physical_address": "1",
	          "id": "",
	          "status": "complete",
	          "street_address_1": "test",
	          "street_address_2": "test",
	          "city": "Miami",
	          "state_id": "Florida",
	          "zip": "123456"
	        },
	        "company_primary_contact": {
	          "first_name": "Managing",
	          "last_name": "Director",
	          "email": "test@gmail.com",
	          "phone_number": "",
	          "title": "President/Managing Member"
	        },
	        "company_accounts_payable_contact": {
	          "first_name": "Payable",
	          "last_name":"Contact",
	          "email":"testgmail.com",
	          "phone_number":"1234567890"
	        },
	        "user": {
            'first_name': this.firstName.value,
            'last_name': this.lastName.value,
            'email':  this.email.value,
            'phone_number': this.phoneNumber.value,
	       "address_attributes":{
	         "same_as_physical_address":"1",
	         "id":"",
	         "status":"complete",
	         "street_address_1":"",
	         "street_address_2":"",
	         "city":"",
	         "state_id":"",
	         "zip":""
	       }
	    },
         "terms_of_service":"1"
      }
    }
  }

  loginFormWindow(){
    const modalRef = this.modalService.open(LoginFormComponent)
  }

  congratsPopupWindow() {
    const modalRef = this.modalService.open(CongratsPopupComponent)
  }

  signOut(){
    this.pageService.signOutUser().subscribe(
      res => {
        console.log('Auth Response:', res)
      },
      err => {
        console.error('Auth Error:', err)
      }
    )
  }
}
