import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import {
  Component,
  ViewChild,
  Input,
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
  selector: 'sunray-ui-app-account-user-edit-company-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent extends BasePage {
  @ViewChild(FormComponent) formComponent: FormComponent
  primaryEntity: iEntity
  @Input()
  entity: iEntity

  inputGroup$: Observable<InputType>
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
        this.loadEmptyEntity('users')
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

  private resourceType(){
    return 'users'
  }

  private formName() {
    return 'users.edit'
  }
  
  private payload() {
    let payload = this.formGroup.value
    payload['company_id'] = this.primaryEntity.id 
    payload['resource_type'] = 'User'
    return payload
  }

  private get formGroup() {
    return this.formComponent.formGroup
  }
}
