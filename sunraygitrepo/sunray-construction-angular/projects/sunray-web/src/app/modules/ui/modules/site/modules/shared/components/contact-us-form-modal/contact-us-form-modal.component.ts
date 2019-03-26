import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ContactUsFormComponent } from '../contact-us-form/contact-us-form.component';

@Component({
  selector: 'sunray-site-shared-contact-us-form-modal',
  templateUrl: './contact-us-form-modal.component.html',
  styleUrls: ['./contact-us-form-modal.component.scss'],
})
export class ContactUsFormModalComponent implements OnInit {
  @Input()
  formType: any;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {}
}
