import * as _           from 'lodash';
import { Observable }   from 'rxjs';

import { mergeMap, skipWhile } from 'rxjs/operators';

import { Store } from '@ngrx/store'

import {
  Component, ViewChild
} from '@angular/core';

import {
  InputType, FormComponent
} from '@ceo/shared'
import { iEntity } from '@ceo/entity'

import { SharedBasePage as BasePage }    from '@sunray-ui-app/modules/imports';

@Component({
  selector: 'sunray-ui-app-account-company-edit-request-setting',
  templateUrl: './request-setting.component.html',
  styleUrls: ['./request-setting.component.scss'],
})
export class RequestSettingComponent extends BasePage {
  @ViewChild(FormComponent) formComponent: FormComponent

  inputGroup$: Observable<InputType>
  entity: iEntity
  
  delegatedProperties: any = {
    dataService: [
      'primaryEntity$',
      'handleDialogActions',
    ],
    pageService: [
      'resourceFormFactory',
    ],
  }

  ngOnInit() {
    super.ngOnInit()
    this.primaryEntity$.subscribe((primaryEntity) => {
      this.entity = primaryEntity
      this.inputGroup$ = this.loadFields$(this.entity)
    })
    this.handleDialogActions(this)
  }

  loadFields$(entity): Observable<InputType> {
    let resourceOpts = {
      resourceType: 'companies',
      formName: this.formName() 
    }
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }

  private formName() {
    return 'companies.request-settings'
  }

  private payload(): any {
    return this.formGroup.value
  }

  private get formGroup() {
    return this.formComponent.formGroup
  }
}
