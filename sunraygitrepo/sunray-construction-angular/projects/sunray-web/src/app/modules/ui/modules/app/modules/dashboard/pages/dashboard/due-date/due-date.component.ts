import * as _ from "lodash";

import { Observable } from 'rxjs';

import {
  Component, OnInit, Input,
} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sunray-ui-app-dashboards-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.scss']
})
export class DueDateComponent implements OnInit {

  @Input()
  dueDateCount: any;


  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
