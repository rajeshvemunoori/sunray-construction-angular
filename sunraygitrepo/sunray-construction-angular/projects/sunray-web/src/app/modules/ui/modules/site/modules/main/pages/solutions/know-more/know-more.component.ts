import { 
  Component, OnInit, Input
} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sunray-site-our-solution-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.scss']
})
export class KnowMoreComponent implements OnInit {

  @Input()
  title: any;
  @Input()
  description: any;
  @Input()
  imagePath: any;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log("Loaded Modal");
  }

}
