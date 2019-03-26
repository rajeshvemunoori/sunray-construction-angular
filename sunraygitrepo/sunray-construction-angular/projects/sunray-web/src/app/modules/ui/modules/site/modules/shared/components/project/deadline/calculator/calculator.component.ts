import {
  Observable,
} from 'rxjs'

import {
  first,
} from 'rxjs/operators'

import {
  iEntity,
} from '@ceo/entity'

import {
  Component, Input,
} from '@angular/core'

import { FormControl } from '@angular/forms'

import { kebabCase } from '@ceo/core'

import {
  iFormItem,
  NgbDateNativeAdapter,
} from '@ceo/shared'

import { BaseComponent } from '../../../../imports'

@Component({
  selector: 'sunray-site-project-deadline-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent extends BaseComponent {
  @Input() entity: iEntity
  @Input() project$: Observable<iEntity>

  dateControl: FormControl
  newDateControl: FormControl
  datepickerItem: iFormItem

  constructor(
    private dateAdapter: NgbDateNativeAdapter,
  ) {
    super()
  }

  ngOnInit() {
    this.initDateControl()

    var datepickerElement = {
      type: 'input',
      inputType: 'date',
      control: this.dateControl,
      placeholder: 'mm/dd/yy',
    }

    this.datepickerItem = {
      element: datepickerElement,
    }

    this.project$.subscribe(project => {
      let entityValue = project[this.anchorDateAttr]
      if(entityValue != this.dateControl.value) {
        this.dateControl.setValue(entityValue)
      }
    })
  }

  private initDateControl() {
    this.dateControl = this.buildDateControl()
    this.dateControl.valueChanges
      .subscribe(value => this.setProjectDate(value))
  }

  private buildDateControl() {
    return new FormControl({value: '', disabled: false})
  }

  private setProjectDate(date) {
    this.project$.pipe(
      first(),
    ).subscribe( project => {
      let entityValue = project[this.anchorDateAttr]
      if(entityValue != date) {
        project.setAttr(this.anchorDateAttr, date)
        this.project$.next(project)
      }
    })
  }

  private get anchorDateAttr(): string {
    return kebabCase(this.entity.dueDateAnchor)
  }
}
