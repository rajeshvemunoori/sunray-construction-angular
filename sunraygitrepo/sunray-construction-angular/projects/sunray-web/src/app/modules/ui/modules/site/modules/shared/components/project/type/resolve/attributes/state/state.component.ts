import { Component } from '@angular/core';

import { BaseComponent } from '../base/base.component'

@Component({
  selector: 'sunray-site-project-type-resolve-attributes-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent extends BaseComponent {
  onRegionSelect(event) {
    event = {
      item: event
    }
    this.onAttributeSelected(event)
  }
}
