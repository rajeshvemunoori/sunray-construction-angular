import * as _           from 'lodash'
import { Observable }   from 'rxjs'
import { Store }        from '@ngrx/store'
import {
  distinctUntilChanged,
  take, skip, filter
} from 'rxjs/operators';

import {
  Component,
  Injector,
} from '@angular/core'

import { FormComponent } from '@ceo/shared'
import { MatDialogAdapterService }  from '@ceo/shared'
import {
  SystemComponentsActions,
  systemComponentsSelectors
} from '@ceo/state'

import { SharedBasePage as BasePage } from '@sunray-ui-app/modules/imports'
import {
  ResourceFormFactory,
  EntityFactory,
} from '@sunray-api'
import {
  PageService,
} from '@sunray-ui-app/modules/imports'

import { DataService }    from './data.service'
import { UserEditPage }   from '../../user-edit'

@Component({
  selector: 'sunray-ui-app-account-company-detail-user-pane',
  templateUrl: './user-pane.component.html',
  styleUrls: ['./user-pane.component.scss'],
  providers: [DataService]
})

export class UserPaneComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'getStoreData$',
      'itemActions$',
      'getTableHeader$',
      'getUser$',
      'loadEmptyEntity',
    ],
    pageService: [
      'showDialog', 'defineCustomElement',
      'buildCustomElement',
    ],
  }

  searchAttributes: any={}
  entity: any
  userEntity: any

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  get collection$() {
    let selectorName = 'app.entities.companies.selectedEntityUsersAll'
    return this.getStoreData$(selectorName)
  }

  get collectionHeader$() {
    let item = 'company-users-headers'
    return this.getTableHeader$(item)
  }

  search(event) {
    this.searchAttributes = {
      'first-name': event.searchText,
      'last-name': event.searchText,
      'email': event.searchText
    }
  }

  triggerAction(event) {
    if(event.action == "edit") {
      this.edit(event.entity)
    }
  }

  add() {
    this.edit(
      this.loadEmptyEntity('users')
    )
  }

  edit(entity) {
    let elementName = 'user-edit-element'
    this.ensureCustomElement(elementName)

    let customElement = this.buildCustomElement(
      elementName,
      {
        entity: entity
      }
    )

    this.showCustomElement(customElement, elementName)
  }

  ensureCustomElement(elementName) {
    let config = {
      elementName: elementName,
      ctor: UserEditPage,
      opts: {injector: this.injector},
    }
    this.defineCustomElement(config)
  }

  private showCustomElement(customElement, elementName) {
    let dialogConfig = this.dialogConfig()
    let dialogComponent = this.showDialog(customElement, dialogConfig)

    dialogComponent.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

  private dialogConfig() {
    return {
      header: {
        show: true,
        title: 'User Edit'
      }
    }
  }

  loadFields$() {
    let resourceOpts = {
      resourceType: 'users',
      formName: 'users.edit'
    }
    return this.resourceFormFactory.build$(
      this.entityFactory.build('users'),
      resourceOpts
    )
  }

  private inspectFields(fields) {
    debugger
    console.log(fields)
  }

  setEntity(entity) {
    this.getUser$(entity.id).subscribe((entity) => {
      this.userEntity = entity
    })
  }

  getPatchValues() {
    return _.reduce(this.userEntity.attributes, function(values, value, key) {
      values[_.camelCase(key)] = value
      return values
    }, {})
  }
}


// addUser() {
//   // let user = this.entity.newUser()
//   // opts = {
//   //   entity: user
//   // }
//   // this.actionService.navigate(['users/new'], opts)
//   let this_ = this
//   // states$ = this.getCollection$('states')
//   let data = {
//     input: {
//       fields$: this.loadFields$()
//     },
//     component: FormComponent,
//     title: "Project Contact"
//   }
//   const dialogRef = this._dialog.open(data)
//
//   dialogRef.afterClosed().subscribe(result => {
//     if(result) {
//       let resourceOpts = {
//         feature: "app",
//         type: 'new-users-creation',
//         data: this.getPayload(result)
//       }
//
//       this._dataService.create$(resourceOpts)
//     }
//   })
// }
