import { Observable }   from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { ReportTypeService }  from '../report-type.service';
import { DataService }        from './data.service'; 

@Component({
  selector: 'sunray-ui-app-report-report-detail-page',
  templateUrl: './report-detail.page.html',
  styleUrls: ['./report-detail.page.scss'],
  providers: [DataService]
})
export class ReportDetailPage implements OnInit {
  configHeaders$: Observable<any>;
  entity$: Observable<any>;

  constructor(
    private reportType: ReportTypeService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.reportType.loadCollection$()
    this.entity$ = this.dataService.getReport$("accounts")
    this.configHeaders$ = this.dataService.getConfigHeaders$("accounts")
    this.dataService.processReports$(this.entity$)
    this.entity$.subscribe(data => {
      debugger
    });
  }
}
