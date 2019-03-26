import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "sunray-ui-site-layout-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input()
  layoutService: any

  constructor()  {
  }

  ngOnInit()  {
  }
}
