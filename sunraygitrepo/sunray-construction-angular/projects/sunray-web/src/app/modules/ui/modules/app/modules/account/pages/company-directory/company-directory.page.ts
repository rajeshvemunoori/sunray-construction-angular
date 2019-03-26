import * as _                  from 'lodash'
import { Component, OnInit }   from '@angular/core'
import { Observable }          from 'rxjs'

import { SharedBasePage as BasePage } from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-account-company-directory-page',
  templateUrl: './company-directory.page.html',
  styleUrls: ['./company-directory.page.scss']
})
export class CompanyDirectoryPage extends BasePage {
  configHeader$: Observable<any>
  searchAttributes: any={}

  delegatedProperties: any = {
    dataService: [
      'appCompanies$',
      'getTableHeader$',
    ]
  }

  ngOnInit() {
    super.ngOnInit()
    this.configHeader$ = this.getTableHeader$('company-directory-headers')
  }

  search(event_){
    this.searchAttributes = { 
      'name': event_.searchText,
      'primary-phone-number': event_.searchText
    }
  }
}
