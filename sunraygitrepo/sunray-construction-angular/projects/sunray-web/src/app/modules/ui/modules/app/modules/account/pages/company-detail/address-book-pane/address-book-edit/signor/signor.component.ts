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
  selector: 'sunray-ui-app-account-company-detail-address-book-edit-contact',
  templateUrl: './signor.component.html',
  styleUrls: ['./signor.component.scss']
})
export class SignorComponent extends BasePage {
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
    this.entity = this.loadEmptyEntity('signors')
  }

  loadFields$(entity): Observable<InputType> {
    let resourceOpts = {
      resourceType: this.resourceType(),
      formName: this.formName()
    }
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }
  
  payload() {
    return this.formGroup.value
  }

  private get formGroup() {
    return this.formComponent.formGroup
  }

  private resourceType(){
    return 'signors'
  }

  private formName() {
    return 'signors.edit'
  }
}
