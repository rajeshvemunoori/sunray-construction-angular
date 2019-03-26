import { Observable }         from 'rxjs';

import { Component, OnInit, Input }  from '@angular/core';

import {
  iEntity,
} from '@ceo/entity';

import { iDataService } from '@sunray-ui-shared'

@Component({
  selector: 'sunray-ui-layout-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()
  dataService: iDataService

  constructor() { 
  }

  ngOnInit() {
  }

}
