import { Store, select }  from '@ngrx/store'
import { Observable }     from 'rxjs'

import { Component, OnInit } from '@angular/core'

import { SharedBasePage as BasePage }  from '@sunray-ui-app/modules/imports'
import { routerSelectors }    from '@ceo/state'

import { DataService, resourceTypeProvider } from './data.service'

@Component({
  selector: 'sunray-ui-app-accounting-invoice-edit-page',
  templateUrl: './invoice-edit.page.html',
  styleUrls: ['./invoice-edit.page.scss'],
  providers: [
    DataService,
    resourceTypeProvider,
  ],
})
export class InvoiceEditPage extends BasePage {
  entity$: Observable<any>
  fees$: Observable<any>
  header$: Observable<any>

  constructor(
    private _store: Store<any>,
    private _dataService: DataService,
  ) { 
    super()
  }

  ngOnInit() {
    this.entity$ = this._dataService.entity$
    this.loadHeader$()
    this.loadDocumentRequestFees$()
  }

  loadDocumentRequestFees$(){
    this.fees$ = this._dataService.loadDocumentRequestFees$()
  }

  loadHeader$(){
    this.header$ = this._dataService.loadHeader$()
  }
}
