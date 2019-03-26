import { Component, OnInit, Input } from '@angular/core'

import { BaseComponent } from '../../../imports'

@Component({
  selector: 'sunray-ui-site-layout-footer-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends BaseComponent {
  @Input()
  menu$: any
}
