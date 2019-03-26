import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sunray-ui-site-feature-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  collection: any[];

  constructor() { }

  ngOnInit() {}
}
