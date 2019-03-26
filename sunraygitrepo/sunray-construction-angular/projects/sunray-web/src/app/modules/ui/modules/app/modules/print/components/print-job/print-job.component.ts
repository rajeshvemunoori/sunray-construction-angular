import * as _ from 'lodash';

import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'sunray-ui-app-print-job',
  templateUrl: './print-job.component.html',
  styleUrls: ['./print-job.component.scss']
})
export class PrintJobComponent implements OnInit {
  public batchIds: any[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }
}
