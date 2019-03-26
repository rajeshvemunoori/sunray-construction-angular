import * as _ from 'lodash';
import { Observable }                 from 'rxjs';
import {
  Component, OnInit, Input
} from '@angular/core';

import {
  NgbModal, NgbActiveModal
}    from '@ng-bootstrap/ng-bootstrap';

import { LightBoxComponent }       from '../../../light-box/index';

@Component({
  selector: 'sunray-site-learning-center-shared-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.scss']
})
export class ContentBodyComponent implements OnInit {

  startPage: Number;
  paginationLimit: Number;

  @Input()
  contentType: any;

  @Input()
  contentList$: Observable<any>;
  // contentList: any[];

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.startPage = 0;
    this.paginationLimit = 3;
    // this.getContentList();
  }

  // getContentList(){
  //   this.contentList$.subscribe(collection => this.setContentList(collection));
  // }

  // setContentList(collection){
  //   this.contentList = collection.entities;
  // }

  loadMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3;
  }

  isContentType(contentType) {
    return this.contentType == contentType;
  }

  lightBoxPopup(videoUrl){
    if(this.isPlayable()) {
      const modalRef = this.modalService.open(LightBoxComponent);
      modalRef.componentInstance.videoUrl = videoUrl;
    }
  }

  isPlayable() {
    return (this.isContentType("video") || this.isContentType("webinar"));
  }
}
