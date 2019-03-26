import * as _           from 'lodash'
import { Observable }   from 'rxjs'

import {
  Component,
  ViewChild,
  Input
} from '@angular/core'

import { iEntity }      from '@ceo/entity'
import {
  InputType,
  FormComponent
} from '@ceo/shared'

import {
  SharedBasePage as BasePage,
} from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-account-company-detail-division-edit-notaries',
  templateUrl: './notaries.component.html',
  styleUrls: ['./notaries.component.scss']
})
export class NotariesComponent extends BasePage {
}
