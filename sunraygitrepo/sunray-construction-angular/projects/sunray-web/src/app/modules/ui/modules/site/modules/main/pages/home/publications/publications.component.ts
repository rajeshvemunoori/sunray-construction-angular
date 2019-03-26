import { Observable } from 'rxjs'

import { Component, Input } from '@angular/core'

import { iEntityCollection }    from '@ceo/entity'

import { BaseComponent } from '../../imports'

@Component({
  selector: 'sunray-ui-site-home-page-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent extends BaseComponent {
  @Input()
  collection$: Observable<iEntityCollection>
}
