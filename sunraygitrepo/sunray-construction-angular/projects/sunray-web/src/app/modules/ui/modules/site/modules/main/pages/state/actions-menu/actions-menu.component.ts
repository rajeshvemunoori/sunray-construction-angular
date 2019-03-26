import { Component, OnInit, Input } from '@angular/core';

import { iEntity } from '@ceo/entity';

@Component({
  selector: 'sunray-ui-site-state-page-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.scss']
})
export class ActionsMenuComponent implements OnInit {
  @Input()
  state$: iEntity;

  constructor() { }

  ngOnInit() {
  }

  private goToAnchor(id){
    document.getElementById(id).scrollIntoView();
  }

}
