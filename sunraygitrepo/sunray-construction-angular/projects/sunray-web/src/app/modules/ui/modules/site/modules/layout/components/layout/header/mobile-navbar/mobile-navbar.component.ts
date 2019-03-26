import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  trigger, transition, style, animate, state
} from '@angular/animations'

let introStyle = {
  top: '50%',
  left: '50%',
  width: '150px',
  transform: 'translateX(-50%) translateY(-50%)',
  paddingTop: '0rem'
};

let headerStyle = {
  top: '0.5rem',
  left: '1rem',
  width: '75px',
  transform: 'translateX(0) translateY(0)',
  paddingTop: '0.3125rem'
};

@Component({
  selector: 'sunray-ui-site-layout-header-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
  animations: [
    trigger('logoIntro', [
      state('intro',  style(introStyle)),
      state('header', style(headerStyle)),
      transition('intro => header', animate('500ms 200ms ease-in-out')),
    ])
  ],
})
export class MobileNavbarComponent implements OnInit {
  @Input()
  layoutService: any

  logoStatus: string = 'intro';
  showNavs: boolean = false;
  backgroundColor: string;

  @Output()
  animationEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  logoIntroDone(event) {
    this.animationEmitter.emit(event);

    if(event.toState == "intro") {
      this.showHeader();
    }
    if(event.toState == "header") {
      this.backgroundColor = "primary";
      this.showNavs = true;
    }
  }

  showHeader() {
    this.logoStatus = "header";
  }
}


/*
 *
    trigger('logoIntro', [
      state('intro',  style(introStyle),
      state('header', style(headerStyle),
    ])
    trigger(
      'navsAnimation',
      [
        transition(
          ':enter',
          [
            style({"margin-top": "-150px"}),
            animate('2000ms', style({'margin-top': "-300px"}))
          ]
        ),
      ]
    ),
*/
