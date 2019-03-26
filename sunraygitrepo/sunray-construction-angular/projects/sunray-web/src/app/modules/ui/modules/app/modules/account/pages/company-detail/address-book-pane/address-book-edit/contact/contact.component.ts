import {
  Component,
  ViewChild,
  Input,
} from '@angular/core'

import {
  InputType,
  FormComponent
} from '@ceo/shared'

import {
  SharedBasePage as BasePage,
} from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-account-company-detail-address-book-pane-edit-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends BasePage {
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
    this.entity = this.loadEmptyEntity('project-participant-assignments')
  }

  loadFields$(entity): Observable<InputType> {
    let resourceOpts = {
      resourceType: this.resourceType(),
      formName: this.formName()
    }
    return this.resourceFormFactory.build$(entity, resourceOpts)
  }
  
  payload() {
    let payload = {}
    payload['project_participant_attributes'] = this.formGroup.value
    payload['resource_id'] = this.primaryEntity.id
    payload['resource_type'] = 'Company'
    payload['is_client'] = false
    payload['is_representative'] = false
    return payload
  }

  private get formGroup() {
    return this.formComponent.formGroup
  }

  private resourceType(){
    return 'project_participants'
  }

  private formName() {
    return 'project-participants.edit'
  }
}
