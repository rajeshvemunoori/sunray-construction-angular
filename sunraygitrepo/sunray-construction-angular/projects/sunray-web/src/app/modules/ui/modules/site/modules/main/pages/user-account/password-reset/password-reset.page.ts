import { Component } from '@angular/core'
import { NgForm }            from '@angular/forms'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { BasePage } from '../../imports'

@Component({
  selector: 'sunray-ui-site-account-password-reset-page',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss']
})
export class PasswordResetPage extends BasePage {
  entityForm: FormGroup
  email: FormControl 

  delegatedProperties: any = {
    pageService: ['showNotification']
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
    this.email = new FormControl('', Validators.required)
  }

  createFormGroup() {
    this.entityForm = new FormGroup({
      email: this.email,
    })
  }

  onSubmit() {
    this.handleSubmission()
  }

  handleSubmission() {
    if(!this.entityForm.valid) {
      this.showInvalidFormNotification()
    }
    else {
      this.processFormSubmission()
      this.showNotification(
        "Signup successful."
      )
    }
  }

  showInvalidFormNotification() {
    this.showNotification(
      "Please enter an email address before submitting."
    )
  }

  processFormSubmission() {
    let resourceOpts = {
      feature: 'app',
      type: "user-account-passwords",
      data: this.formData()
    }
    this.dataService.create$(resourceOpts)
  }

  formData() {
    return {
      email: this.email.value
    }
  }
}
