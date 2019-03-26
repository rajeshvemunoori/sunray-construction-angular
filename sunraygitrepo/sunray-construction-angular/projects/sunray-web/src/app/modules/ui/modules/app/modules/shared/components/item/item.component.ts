import { Observable }   from 'rxjs'
import {
  mergeMap, map,
  filter,
} from 'rxjs/operators'
import {
  Component, OnInit, Input
} from '@angular/core';
import { FormGroup }          from '@angular/forms';

import {
  ItemComponent as SharedItemComponent,
  iInputGroup,
} from '@ceo/shared'
import { iEntity } from '@ceo/entity'

import {
  DataService,
  PageService,
} from '../../services'

@Component({
  selector: '[sunray-ui-app-shared-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent extends SharedItemComponent {
  @Input()
  formName: string = "edit"
  @Input()
  inlineEdit : boolean

  isEdit: boolean = false
  inputGroup$: Observable<iInputGroup>
  inputGroup: iInputGroup
  formGroup: FormGroup

  constructor(
    private pageService: PageService,
    private dataService: DataService
  ) {
    super()
  }

  triggerAction(entity, action) {
    if(this.inlineEdit)
    {
      if(action=='edit') {
      this.edit(entity)
    }
   }
    else {
      this.actionEmitter.emit({
        entity: entity,
        action: action
      });
    }
  }

  edit(entity: iEntity) {
    this.isEdit = true
    this.loadInputGroup(entity)
    this.loadFormGroups()
  }

  loadInputGroup(
    entity: iEntity
  ) {
    let formName = entity.type+"."+this.formName
    let resourceOpts = {
      resourceType: entity.type,
      formName: formName
    }
    this.inputGroup$ = this.pageService.resourceFormFactory.build$(
      entity,
      resourceOpts
    )
  }

  loadFormGroups() {
    this.inputGroup$
      .subscribe(inputGroup => {
        this.inputGroup = inputGroup
        this.formGroup = this.pageService.inputControlService.toFormGroup(inputGroup)
      })
  }

  submit() {
    let resourceOpts = this.dataService.ri(this.entity)
    resourceOpts['data'] = this.payload()
    this.dataService.update$(resourceOpts)
  }

  payload() {
    return this.formGroup.value
  }

  cancel() {
    this.isEdit=false
  }
}
