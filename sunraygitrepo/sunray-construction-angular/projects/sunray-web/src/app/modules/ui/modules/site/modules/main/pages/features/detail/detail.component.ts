import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sunray-ui-site-feature-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input()
  entity: any;

  constructor() { }

  ngOnInit() {
  }

}
