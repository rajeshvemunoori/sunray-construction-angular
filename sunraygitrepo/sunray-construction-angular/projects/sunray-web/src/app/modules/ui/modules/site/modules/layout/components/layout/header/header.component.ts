import * as _ from 'lodash'

import {
  Component,
  OnInit,
  Input,
  Renderer2,
} from '@angular/core'

import {
  trigger, transition, style, animate, state
} from '@angular/animations'

import { 
  BaseComponent,
} from '../../imports'


let closedStyle = {
  backgroundColor: "#ffffff",
}

let openedStyle = {
  backgroundColor: "#0070B9",
}

@Component({
  selector: "sunray-ui-site-layout-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('backgroundStyle', [
      state('closed',  style(closedStyle)),
      state('closing',  style(closedStyle)),
      state('opened', style(openedStyle)),
      transition('opened => closing', animate('100ms ease-in-out')),
    ])
  ],
})
export class HeaderComponent extends BaseComponent {
  @Input()
  layoutService: any

  private mobileNavbarState: string = 'closed'
  private mobileNavbarShowStates: string[] = ['opening', 'opened', 'closing']
  private mobileNavbarActive: boolean = false

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    (<any>this.layoutService).routerNavigationStart$
      .subscribe(event => this.closeNavbar())
  }

  closeNavbar() {
    this.mobileNavbarState = 'closing'
    this.mobileNavbarActive = false
  }

  onMobileNavbarToggleEmit(event) {
    this.toggleMobileNavbar(event)
  }

  onMobileNavbarAnimationEmit(event) {
    if(event.toState == 'header') {
      this.mobileNavbarState = 'opened'
    }
  }

  onBackgroundStyleDone(event) {
    if(event.toState == 'closing') {
      this.mobileNavbarState = 'closed'
    }
    this.animateBody(event)
  }

  private animateBody(event) {
    let className = 'mobile-navbar-active'

    if(event.toState == 'opened') {
      this.renderer.addClass(document.body, className)
    }
    else {
      this.renderer.removeClass(document.body, className)
    }
  }

  private toggleMobileNavbar(event) {
    if(event.toState == 'inactive') {
      this.mobileNavbarState = 'closing'
    }
    else {
      this.mobileNavbarState = 'opening'
    }
  }

  private shouldShowMobileNavbar() {
    return _.includes(this.mobileNavbarShowStates, this.mobileNavbarState)
  }

  private mainWrapperClass() {
    switch(this.mobileNavbarState) { 
      case "opening":
      case "closing":
        return "mobile-navbar-active"
      case "opened":
        return "mobile-navbar-active bg-body-primary"
      case "closed":
      default:
        return ""
    } 
  }

  private navbarTogglerWrapperClass() {
    switch(this.mobileNavbarState) { 
      case "opening":
        return "navbar-toggler-wrapper-primary"
      case "opened":
        return "navbar-toggler-wrapper-white"
      case "closed":
      default:
        return ""
    } 
  }
}

/*
let startStyle = style({opacity: 0})
let endStyle   = style({opacity: 1})
let enterDuration = '2000ms'
let leaveDuration = '500ms'

let enterTransition = [startStyle, animate(enterDuration, endStyle)]
let leaveTransition = [endStyle, animate(enterDuration, startStyle)]

  animations: [
    trigger(
      'toggleAnimation',
      [
        transition(':enter', enterTransition),
        transition(':leave', leaveTransition)
      ]
    )
  ],
*/

