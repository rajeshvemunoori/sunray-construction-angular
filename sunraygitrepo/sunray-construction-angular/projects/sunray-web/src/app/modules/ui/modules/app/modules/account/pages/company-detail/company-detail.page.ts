import * as _ from 'lodash'

import { Observable, BehaviorSubject }     from 'rxjs'
import { map }     from 'rxjs/operators'

import {
  Component, OnInit, Inject,
  ViewChild, ComponentFactoryResolver,
  OnDestroy
} from '@angular/core'

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
  DataService
} from '@sunray-ui-app/modules/imports'

import { paneList } from './pane-list'

let paneListProvider = {
  provide: PaneList,
  useValue: paneList,
}

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
  selector: 'sunray-ui-app-account-company-detail-page',
  templateUrl: './company-detail.page.html',
  styleUrls: ['./company-detail.page.scss'],
  providers: [
    DataService,
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
export class CompanyDetailPage extends BasePage {
  paneCards$: Observable<any>
  panes$: Observable<iPane[]>

  @ViewChild(NavigationDirective) navigationDirective: NavigationDirective

  delegatedProperties: any = {
    dataService: [
      'primaryEntity$',
    ],
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private paneManager: PaneManager
  ) {
    super(pageService, dataService)
  }

  ngOnInit() {
    super.ngOnInit()
    this.paneCards$ = this.paneManager.panes$.pipe(
      map(panes => {
        return _.map(panes, _.bind(this.buildPaneCard, this))
      })
    )
  }

  buildPaneCard(pane) {
    return pane.toCard()
  }

  activatePane(event) {
    let pane = event.item
    this.paneManager.activatePane(pane)
  }

}
