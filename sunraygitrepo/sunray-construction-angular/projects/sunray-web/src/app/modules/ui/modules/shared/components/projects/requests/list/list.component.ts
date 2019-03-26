import * as _ from "lodash";

import { Observable } from 'rxjs';

import { Input, Component, OnInit } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'sunray-projects-requests-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input()
  projectRequests$: Observable<any[]>;

  public attrNames: Array<string>;
  public tableHeaders: Array<string>;

  ngOnInit() {
    this.setTableHeaders();
  }

  setTableHeaders(): void {
    this.attrNames = [
      "date-submitted",
      "due-date",
      "company-name",
      "job.address-attributes.state-name",
      "state-request-type-name",
      "document-request-status",
      "actions"
      ];

    let sanitizedAttrName = (attrName) => {
      return _.startCase(attrName);
    };

    this.tableHeaders = _.map(this.attrNames, sanitizedAttrName);
  }
}
