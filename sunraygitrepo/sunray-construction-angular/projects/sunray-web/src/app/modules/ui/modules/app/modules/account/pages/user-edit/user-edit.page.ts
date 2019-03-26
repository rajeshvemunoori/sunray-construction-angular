import * as _ from 'lodash'

import { Observable, BehaviorSubject }     from 'rxjs'
import { map }     from 'rxjs/operators'

import {
  Component, OnInit, Inject,
  Input, ViewChild, ComponentFactoryResolver,
  OnDestroy, ViewContainerRef, ComponentRef,
  ComponentFactory
} from '@angular/core';

import {
  iPane,
  NavigationDirective,
  PaneManager,
  PaneFactory,
  PaneProvider,
  PaneList,
} from '@ceo/shared'

import {
  iEntity,
} from '@ceo/entity'

import { 
  SharedBasePage as BasePage,
  PageService,
  DataService,
} from '@sunray-ui-app/modules/imports'

import { paneList } from './pane-list'

let paneListProvider = {
  provide: PaneList,
  useValue: paneList,
};

let buildPaneFactory = (paneList, componentFactoryResolver) => {
  let resolveComponentFactory = (paneData) => {
    let componentFactory =
      componentFactoryResolver.resolveComponentFactory(paneData.componentClass)
    paneData.componentFactory = componentFactory
  }
  _.map(paneList, resolveComponentFactory)

  return new PaneFactory(paneList)
}

@Component({
  selector: 'sunray-ui-app-account-user-edit-page',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
  providers: [
    paneListProvider,
    PaneManager,
    PaneProvider,
    {
      provide: PaneFactory,
      useFactory: buildPaneFactory,
      deps: [
        PaneList,
        ComponentFactoryResolver,
      ]
    },
  ],
})

export class UserEditPage extends BasePage {
  paneCards$: Observable<any>
  inputs: any[]

  @Input()
  entity: iEntity

  @ViewChild(NavigationDirective) navigationDirective: NavigationDirective

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private paneManager: PaneManager,
  ) {
    super(pageService, dataService)
  }

  ngOnInit() {
    this.paneCards$ = this.paneManager.panes$.pipe(
      map(panes => {
        return _.map(panes, _.bind(this.buildPaneCard, this))
      })
    )
    this.setInputs() 
  }

  buildPaneCard(pane) {
    return pane.toCard()
  }

  activatePane(event) {
    let pane = event.item
    this.paneManager.activatePane(pane)
  }

  setInputs() {
    this.inputs = {
      dataService: this.dataService,
      entity: this.entity
    }
  }
}
