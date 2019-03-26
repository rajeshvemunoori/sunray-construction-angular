import { Store, createSelector } from '@ngrx/store'

import { Component, OnInit } from '@angular/core'

import {
  EntitySelectorNameService,
  DataService,
  EntityActions,
  EntitySelectorService,
} from '@ceo/entity'

import { BaseComponent } from '../imports'

@Component({
  selector: 'sunray-app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {

  constructor(
    private dataService: DataService,
    private store: Store<any>,
    private selectorService: EntitySelectorService,
  ) {
    super()
  }

  ngOnInit() {
    this.loadUsers()
    this.setSelectedUserAccount(2005)
  }

  loadUsers() {
    let resourceOpts = {
      feature: 'app',
      type: 'user-accounts'
    }
    this.dataService.get$(resourceOpts)
  }

  private setSelectedUserAccount(id) {
    let resourceOpts = {
      entity: {
        id: id 
      }
    }
    let sliceName = 'app.entities.user-accounts'
    this.store.dispatch(
      new EntityActions.SetPrimaryEntity(sliceName, resourceOpts)
    )
  }
}
