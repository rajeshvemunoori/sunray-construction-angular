import * as _           from 'lodash'

import {
  Component,
  Injector,
} from '@angular/core'

import { SharedBasePage as BasePage } from '@sunray-ui-app/modules/imports'

import { PreferencePaneService }    from './preference-pane.service'
import { PageService } from '@sunray-ui-shared'

import { CompanyEditPage }        from '../../company-edit'

@Component({
  selector: 'sunray-ui-app-account-company-detail-preference-pane',
  templateUrl: './preference-pane.component.html',
  styleUrls: ['./preference-pane.component.scss'],
  providers: [PreferencePaneService]
})
export class PreferencePaneComponent extends BasePage {
  delegatedProperties: any = {
    preferencePaneService: [
      'loadPreferenceTables',
      'entity',
      'loadEntity',
    ],
    pageService: [
      'showDialog', 
      'buildCustomElement',
      'ensureCustomElement',
    ],
  }

  tables: any[]

  constructor(
    private pageService: PageService,
    private preferencePaneService: PreferencePaneService,
    private injector: Injector,
  ) {
    super(pageService, preferencePaneService)
  }

  ngOnInit() {
    super.ngOnInit()
    this.loadTables()
    this.loadEntity()
  }

  loadTables() {
    this.tables = this.
      loadPreferenceTables()
  }

  editCompany(paneName) {
    let elementName = 'company-edit'
    this.ensureCustomElement(
      elementName,
      CompanyEditPage,
      {injector: this.injector}
    )

    let customElement = this.buildCustomElement(
      elementName,
      {
        paneName: paneName 
      }
    )
    this.showDialog(customElement, this.dialogConfig())
  }

  private dialogConfig() {
    var name = this.entity.name
    return {
      header: {
        show: true,
        title: `Company Details - ${name}`
      }
    }
  }
}
