import { Component, OnInit, Input } from '@angular/core';
import { Router }                   from '@angular/router';
import { DomSanitizer }             from '@angular/platform-browser';

import { NgbActiveModal }           from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {
  @Input()
  videoUrl: any;

  constructor(
    private router: Router,
    private activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
