import { Component, OnInit, Input } from '@angular/core'

import {
  BaseComponent,
} from '../../imports'

@Component({
  selector: 'sunray-site-team-member-detail-popup',
  templateUrl: './member-detail-popup.component.html',
  styleUrls: ['./member-detail-popup.component.scss']
})
export class MemberDetailPopupComponent extends BaseComponent {
  @Input()
  entity: any;

  trivia() {
    return [
      {
        title: "Believe it or Not",
        value: this.entity.believe_it_or_not,
        image_url: "/assets/frontend/team_members/trivia/beleive.svg"
      },
      {
        title: "Favorite Book",
        value: this.entity.favorite_book,
        image_url: "assets/frontend/team_members/trivia/favorite.svg"
      },
      {
        title: "Greatest Fear",
        value: this.entity.greatest_fear,
        image_url: "assets/frontend/team_members/trivia/fear.svg"
      },
      {
        title: "Hobby",
        value: this.entity.hobby,
        image_url: "assets/frontend/team_members/trivia/hobby.svg"
      }
    ];
  }
}
