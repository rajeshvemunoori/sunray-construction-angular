import { Component, OnInit, Input, Renderer2 } from '@angular/core';
//import { NgbActiveModal }           from '@ng-bootstrap/ng-bootstrap';
import { Router }                   from '@angular/router';
import {
  FormGroup, FormControl,
  Validators
} from '@angular/forms';

import { AuthService }          from "@ceo/shared";
import { NotificationService }      from '../../services';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;
  wrapperClass: string = "login-form-modal-wrapper"

  constructor(
    private router: Router,
    //private activeModal: NgbActiveModal,
    public authService: AuthService,
    private notificationService: NotificationService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.createForm();
    this.renderer.addClass(document.body, this.wrapperClass);
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, this.wrapperClass);
  }

  createForm() {
    this.createFormControls();
    this.createFormGroup();
  }

  createFormControls() {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  createFormGroup() {
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if(this.myForm.valid) {
      let userData = this.buildUserData(this.myForm.value)
      this.authService.signInUser(userData).subscribe(
          res => {
            this.router.navigate(["/"]);
            this.notificationService.showNotification(
              "You have succussfully logged in."
            );
            //this.activeModal.close();
          },
          err => {
            console.error('auth error:', err);
            this.notificationService.showNotification(
              "Invalid username or password."
            );
          }
      );
    }
    else {
      this.notificationService.showNotification(
        "Please enter a username and password."
      );
    }
  }

  private buildUserData(formData): any {
    return {
      login: formData.email,
      password: formData.password,
    }
  }
}
