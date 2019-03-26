import {
  Component,
  Input,
} from '@angular/core'

import { BaseComponent } from '../../../../imports'

import { ProjectTypeResolver } from '@sunray-ui-shared'


@Component({
  selector: 'sunray-site-project-type-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.scss']
})
export class ResolveComponent extends BaseComponent {
  @Input() resolver: any

  onAttributeSelected(event) {
    let attributeName = event.attribute.name
    let attributeValue = event.value
    this.resolver.setAttribute(attributeName, attributeValue)
  }
}
