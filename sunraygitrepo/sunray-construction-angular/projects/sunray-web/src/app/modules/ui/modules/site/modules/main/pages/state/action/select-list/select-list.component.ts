import * as _ from "lodash";

import {
  Component, Input,
  Output, OnInit,
  EventEmitter,
} from '@angular/core';

import { BaseComponent }  from '../../../imports'

import { actions } from './actions'

@Component({
  selector: 'sunray-ui-site-state-page-action-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent extends BaseComponent {
  items: any[] = actions
  cards: any[] = []

  @Output()
  actionEmitter: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    this.cards = this.buildCards(this.items)
  }

  buildCards(items) {
    let buildCard = _.bind(this.buildCard, this)
    return _.map(items, buildCard)
  }

  buildCard(item) {
    let defaults = {
      footer: true,
      action: this.log,
      item: item,
    }
    return _.defaults(item, defaults)
  }

  log() {}

  onCardClick(card: any) {
    let event = {
      item: card.item
    }
    this.actionEmitter.emit(event)
  }


}
