import * as _ from "lodash";

import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl }                      from '@angular/forms';

import { NgbDateNativeAdapter } from '@ceo/shared';

import { DataService }          from '@ceo/entity';

@Component({
  selector: 'sunray-site-document-deadline-calculator-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss']
})
export class DocumentTypeComponent implements OnInit {
  @Input()
  documentType: any;

  @Output()
  ngbDate: any;

  submissionDateControl: FormControl;
  imageUrls: any = {};

  constructor(
    private dateAdapter: NgbDateNativeAdapter,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.setDateFormControl();
  }

  setDateFormControl() {
    // Right now it is being handed a DATE object
    this.submissionDateControl = new FormControl(this.documentType.submissionDate);

    this.submissionDateControl.valueChanges
      .subscribe(value => this.setSubmissionDate(value));
  }

  setSubmissionDate(value) {
    let date = this.dateAdapter.toModel(value);
    this.documentType.setAttr('submissionDate', date);
  }

  imageUrl(entity) {
    if(! this.imageUrls[entity.name]) {
      let docs = ["notice-to-owner", "construction-lien", "foreclosure"];
      let doc = _.sample(docs);
      this.imageUrls[entity.name] = `/assets/frontend/document-types/${doc}.svg`;
    }

    return this.imageUrls[entity.name];
  }
}
