import * as _         from 'lodash'
import { Observable } from 'rxjs';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core'

import { BaseComponent } from '../base'

@Component({
  selector: 'sunray-ui-app-shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent {

}
