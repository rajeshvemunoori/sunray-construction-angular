import { Component, OnInit, Input }      from '@angular/core';

import { NgbActiveModal }                from '@ng-bootstrap/ng-bootstrap';

import { DatePipe }                      from '@angular/common';

import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateNativeAdapter }          from '@ceo/shared';

import { JsonApiEntity }                 from '@ceo/entity';

import { DocumentTypeService }           from '../calculator/document-type.service';

@Component({
  selector: 'sunray-site-document-deadline-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [DocumentTypeService],
})
export class DetailComponent implements OnInit {
  @Input()
  selectedDocumentTypes: JsonApiEntity[] = [];
  selectedDocument: JsonApiEntity;

  constructor(
    private activeModal: NgbActiveModal,
    private datePipe: DatePipe,
    private dateAdapter: NgbDateNativeAdapter,
    private documentTypeService: DocumentTypeService,
  ) { }

  ngOnInit() {
    this.selectedDocument = this.selectedDocumentTypes[0];
  }

  dateDisplay(date): string {
    var dateFormatter = this.datePipe;
    var result = '';
    result = dateFormatter.transform(date,"EEEE, \n MMMM d, y");
    return result;
  }
}
