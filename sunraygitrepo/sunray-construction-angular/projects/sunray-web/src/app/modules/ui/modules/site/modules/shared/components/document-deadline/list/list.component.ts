import { Component, OnInit, Input }      from '@angular/core'

import { NgbActiveModal }                from '@ng-bootstrap/ng-bootstrap'

import { DatePipe }                      from '@angular/common'

import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

import { NgbDateNativeAdapter }          from '@ceo/shared'

import { JsonApiEntity }                 from '@ceo/entity'

import { DocumentTypeService }           from '../calculator/document-type.service'

@Component({
  selector: 'sunray-site-document-deadline-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DocumentTypeService],
})
export class ListComponent implements OnInit {

  @Input()
  selectedDocumentTypes: JsonApiEntity[] = []
  day: string
  restDate: string
  constructor(
    private activeModal: NgbActiveModal,
    private datePipe: DatePipe,
    private dateAdapter: NgbDateNativeAdapter,
    private documentTypeService: DocumentTypeService,
  ) { }

  ngOnInit() {

  }

  classWidth(): string {
    switch(this.selectedDocumentTypes.length) {
      case 2: { return "col-md-6"}
      case 3: {return "col-md-4"}
      default: {return "col-md-4"}
    }
  }

  dayToDisplay(date): string {
    var dateFormatter = this.datePipe
    var result = ''
    result = dateFormatter.transform(date,"EEEE")
    return result
  }

  dateToDisplay(date): string {
    var dateFormatter = this.datePipe
    var result = ''
    result = dateFormatter.transform(date,"MMMM d, y")
    return result
  }
}
