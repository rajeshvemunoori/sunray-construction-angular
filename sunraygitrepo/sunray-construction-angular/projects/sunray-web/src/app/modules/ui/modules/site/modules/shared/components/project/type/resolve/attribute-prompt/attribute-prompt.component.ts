import { Component, Input, } from '@angular/core'

import { BaseComponent as BaseComponent } from '../../../../../imports'

@Component({
  selector: 'sunray-site-project-type-resolve-attribute-prompt',
  templateUrl: './attribute-prompt.component.html',
  styleUrls: ['./attribute-prompt.component.scss']
})
export class AttributePromptComponent extends BaseComponent {
  @Input() attribute: any
}
