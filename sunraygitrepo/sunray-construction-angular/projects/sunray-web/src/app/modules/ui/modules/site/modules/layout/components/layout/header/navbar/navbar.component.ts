import {
  Component, OnInit,
  Input,
  Injector,
} from '@angular/core'

import { Router }     from '@angular/router'

import {
  NgbModal, NgbModalRef
} from '@ng-bootstrap/ng-bootstrap'

import { AuthService } from "@ceo/shared"

import {
  LoginFormComponent,
  SearchFormComponent,
}  from '../../../../../shared'

@Component({
  selector: 'sunray-ui-site-layout-header-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  layoutService: any

  signInUser = {
    login: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private injector: Injector,
    private router: Router,
  ) { }

  ngOnInit() {}

  private signOut() {
    this.authService.signOutUser().subscribe(
      res => {
        console.log('Auth Response:', res)
      },
      err => {
        console.error('Auth Error:', err)
      }
    )
  }

  onSearch() {
    let elementName = 'search-form'
    this.ensureCustomElement(elementName, SearchFormComponent)
    this.showCustomElement(this.dialogServiceConfig(elementName))
  }

  onLogin() {
    let elementName = 'login-form'
    this.ensureCustomElement(elementName, LoginFormComponent)
    let customElement = this.layoutService.
      buildCustomElement(
        elementName,
        {}
      )
    this.showCustomElement(customElement, elementName)
  }

  ensureCustomElement(elementName, componentCtor) {
    let config = {
      elementName: elementName,
      ctor: componentCtor,
      opts: {injector: this.injector},
    }
    this.layoutService.defineCustomElement(config)
  }

  showCustomElement(customElement, elementName) {
    this.layoutService.showDialog(customElement, elementName)
  }
}
