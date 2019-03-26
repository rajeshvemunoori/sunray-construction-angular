import {
  Component, Input,
  Output, EventEmitter,
} from '@angular/core'

import { BaseComponent as SharedBaseComponent } from '../../../../../../imports'

@Component({
  selector: 'sunray-site-project-type-resolve-attributes-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent extends SharedBaseComponent {
  @Input() attribute: any
  @Output() attributeSelected: EventEmitter<any> = new EventEmitter()

  onAttributeSelected(event) {
    console.log("the attribute is " + event.item)
    event = {
      attribute: this.attribute,
      value: event.item
    }
    this.attributeSelected.emit(event)
  }
}
