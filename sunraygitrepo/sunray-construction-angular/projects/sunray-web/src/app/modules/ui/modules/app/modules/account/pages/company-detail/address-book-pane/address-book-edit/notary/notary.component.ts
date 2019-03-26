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
  selector: 'sunray-ui-app-account-company-detail-address-book-edit-notary',
  templateUrl: './notary.component.html',
  styleUrls: ['./notary.component.scss']
})
export class NotaryComponent extends BasePage {
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
    this.loadEntity()
    this.primaryEntity$.subscribe((primaryEntity) => {
      this.primaryEntity = primaryEntity
      this.entity = this.entity
      this.inputGroup$ = this.loadFields$(this.entity)
      this.handleDialogActions(this)
    })
  }

  loadEntity() {
    this.entity = this.loadEmptyEntity('notaries')
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
    payload['resource_id'] = this.primaryEntity.id
    payload['resource_type'] = 'Company' //this.primaryEntity.type
    return payload
  }

  private get formGroup() {
    return this.formComponent.formGroup
  }

  private resourceType(){
    return 'notaries'
  }

  private formName() {
    return 'notaries.edit'
  }
}
