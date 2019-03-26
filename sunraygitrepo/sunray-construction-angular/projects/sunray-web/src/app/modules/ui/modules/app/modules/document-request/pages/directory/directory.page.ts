import * as _                  from 'lodash'
import { Component, OnInit }   from '@angular/core'
import { Observable }          from 'rxjs'

import {
  InputType, FormComponent,
} from '@ceo/shared'

import { SharedBasePage as BasePage } from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-document-request-directory-page',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss']
})
export class DirectoryPage extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'loadEmptyEntity',
      'appDocumentRequests$',
      'getTableHeader$',
      'handleDialogActions',
    ],
    pageService: [
      'resourceFormFactory',
    ],
  }

  configHeader$: Observable<any>
  searchAttributes: any={}
  inputGroup$: Observable<InputType>

  ngOnInit() {
    super.ngOnInit()
    this.configHeader$ = this.getTableHeader$('document-request-directory-headers')
    this.inputGroup$ = this.loadFields$(
        this.loadEmptyEntity('document-requests'))
    //this.handleDialogActions(this)
  }

  search(event_){
    this.searchAttributes = { 
      'name': event_.searchText,
      'primary-phone-number': event_.searchText
    }
  }

  loadFields$(entity): Observable<InputType> {
    let resourceOpts = {
      resourceType: 'document_requests',
      formName: this.formName() 
    }
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }

  private formName(): string {
    return 'document-requests.edit'
  }
}
