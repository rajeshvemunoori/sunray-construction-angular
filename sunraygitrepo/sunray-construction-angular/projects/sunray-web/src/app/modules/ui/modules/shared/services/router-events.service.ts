import { 
  Observable,
} from 'rxjs'

import { filter } from 'rxjs/operators'

import { Injectable } from '@angular/core'
import {
  ActivatedRoute,
  Router,
  NavigationStart,
} from '@angular/router'

import { Store, select } from '@ngrx/store'

import {
  routerSelectors
} from '@ceo/state'


@Injectable({
  providedIn: 'root'
})
export class RouterEventsService {
  private routerState$: any
  private _routerNavigationStart$: Observable<NavigationStart>

  constructor(
    public store: Store<any>,
    public route: ActivatedRoute,
    public router: Router,
  ) {
    this.initRouterState(router)
  }

  get routerNavigationStart$(): Observable<NavigationStart> {
    if(!this._routerNavigationStart$) {
      this._routerNavigationStart$ = this.buildNavStartEvent()

      this._routerNavigationStart$
        .subscribe(event => this.handleNavigationStart(event))
    }

    return this._routerNavigationStart$
  }

  private buildNavStartEvent(): Observable<NavigationStart> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ) as Observable<NavigationStart>
  }
  
  private handleNavigationStart(event: NavigationStart) {
    //console.log('NavigationStart Event')
  }

  private initRouterState(router) {
    this.routerState$ = this.store
      .select(routerSelectors.selectState)

    this.routerState$.subscribe(state => this.inspectRouterState(state))
  }

  private inspectRouterState(state: any) {
    //console.log(state)
  }

}

