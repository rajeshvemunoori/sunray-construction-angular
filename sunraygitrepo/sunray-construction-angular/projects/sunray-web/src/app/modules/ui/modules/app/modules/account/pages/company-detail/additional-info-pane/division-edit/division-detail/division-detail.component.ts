import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import {
  Component,
  ViewChild,
  Input
} from '@angular/core'

import { iEntity }      from '@ceo/entity'
import {
  InputType,
  FormComponent
} from '@ceo/shared'

import {
  SharedBasePage as BasePage,
} from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-account-company-detail-division-detail',
  templateUrl: './division-detail.component.html',
  styleUrls: ['./division-detail.component.scss']
})
export class DivisionDetailComponent extends BasePage {
  @ViewChild(FormComponent) formComponent: FormComponent

  @Input()
  entity: iEntity

  inputGroup$: Observable<InputType>
  entity: iEntity
  primaryEntity: iEntity
  delegatedProperties: any = {
    dataService: [
      'loadEmptyEntity',
      'handleDialogActions',
      'primaryEntity$',
    ],
    pageService: [
      'resourceFormFactory',
    ],
  }

  ngOnInit() {
    super.ngOnInit()
    this.primaryEntity$.subscribe((primaryEntity) => {
      this.primaryEntity = primaryEntity
      this.entity = this.entity || 
        this.loadEmptyEntity('company-divisions'),
      this.inputGroup$ = this.loadFields$(this.entity)
      this.handleDialogActions(this)
    })
  }

  loadFields$(entity): Observable<InputType> {
    let resourceOpts = {
      resourceType: this.resourceType(),
      formName: this.formName()
    }
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }
  
  payload() {
    let payload = this.formGroup.value
    payload['company_id'] = this.primaryEntity.id 
    payload['resource_type'] = 'CompanyDivision'
    return payload
  }

  private get formGroup() {
    return this.formComponent.formGroup
  }

  private resourceType(){
    return 'company_divisions'
  }

  private formName() {
    return 'company-divisions.edit'
  }
}
