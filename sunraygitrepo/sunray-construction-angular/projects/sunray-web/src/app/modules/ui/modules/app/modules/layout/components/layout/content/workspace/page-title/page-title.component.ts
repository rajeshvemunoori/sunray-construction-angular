import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

import { BaseComponent } from '../../../../imports'

@Component({
  selector: 'sunray-ui-app-layout-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent extends BaseComponent {
  @Input()
  title: string = "Dashboard"

  @Input()
  subtitle: string = "Good morning, Nicole"

  constructor() {
    super()
  }
}
