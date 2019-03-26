import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  //moduleId: module.id,
  selector: 'site-shared-congrats-popup',
  templateUrl: './congrats-popup.component.html',
  styleUrls: ['./congrats-popup.component.scss']
})
export class CongratsPopupComponent implements OnInit {
  @Input()
  formType: any;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.formType);
  }

}
