import { Observable }         from 'rxjs';

import { Component, OnInit, Input }  from '@angular/core';

import {
  iEntity,
} from '@ceo/entity';

@Component({
  selector: 'sunray-ui-app-layout-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()
  navigationMenu$: Observable<iEntity>;

  constructor() { }

  ngOnInit() {
  }

}
