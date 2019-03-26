import * as _           from 'lodash';
import { Observable }   from 'rxjs';

import { Component }  from '@angular/core';

import { InputType } from '@ceo/shared'

import { BasePage }                 from '@sunray-ui-app/modules/imports';
import {
  ResourceFormFactory,
  EntityFactory
}    from '@sunray-api';

@Component({
    selector: 'sunray-ui-app-account-company-detail-division-default',
    templateUrl: 'division-default.component.html',
    styleUrls: ['division-default.component.scss']
})

export class DivisionDefaultComponent extends BasePage {
  inputGroup$: Observable<InputType>

  constructor(
    private resourceFormFactory: ResourceFormFactory,
    private entityFactory: EntityFactory,
  ) {
    super()
  }

  ngOnInit() {
    this.inputGroup$ = this.loadFields$()
  }

  loadFields$() {
    let resourceOpts = {
      resourceType: 'company_divisions',
      formName: 'company-divisions.edit'
    }
    return this.resourceFormFactory.build$(
            this.entityFactory.build('company_divisions'),
            resourceOpts
           )
  }

  private inspectFields(fields) {
    console.log(fields)
  }

}
