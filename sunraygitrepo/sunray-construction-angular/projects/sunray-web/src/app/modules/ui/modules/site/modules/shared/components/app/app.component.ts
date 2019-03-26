import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';

import {
  trigger, transition, style, animate, state
} from '@angular/animations'

import { Store } from '@ngrx/store';

import { EntityActions }                   from '@ceo/entity';
import {
  selectApplicationConfigLaunched,
  ApplicationConfigActions
} from '@ceo/state';

import { BaseComponent } from '../../imports'

import {
  introActiveStyle,
  introCompleteStyle,
} from './animations'

@Component({
  selector: 'sunray-site-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('intro', [
      state('active',  style(introActiveStyle)),
      state('running',  style(introActiveStyle)),
      state('complete', style(introCompleteStyle)),
      transition('active => running', animate('1000ms 0s linear')),
    ])
  ],
})
export class AppComponent extends BaseComponent {
  introStatus: string;

  constructor(
    private store: Store<any>,
  ) {
    super()
  }

  ngOnInit() {
    this.store.select(selectApplicationConfigLaunched)
      .subscribe((isLaunched) => this.launchIntro(isLaunched))
  }

  onIntroDone(event) {
    switch(event.toState) {
      case 'active':
        this.introStatus = 'running';
        break;
      case 'running':
      default:
        this.introStatus = 'complete';
        this.launchPage();
        break;
    }
  }

  private launchIntro(isLaunched) {
    if(isLaunched) {
      this.introStatus = 'complete';
    }
    else {
      this.introStatus = 'active';
    }
  }

  private launchPage() {
    this.store.dispatch(new ApplicationConfigActions.Launch());
  }

  private shouldDisplaySite() {
    return this.introStatus == "complete";
  }

}
