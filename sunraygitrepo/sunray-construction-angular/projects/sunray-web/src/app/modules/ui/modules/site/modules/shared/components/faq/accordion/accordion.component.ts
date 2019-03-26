import * as _ from 'lodash';

import { Observable }   from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';

import { iEntityCollection }  from '@ceo/entity';

@Component({
  selector: 'sunray-site-faq-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input()
  collection$: Observable<iEntityCollection>;

  activeEntities: any[] = [];

  constructor() { }

  ngOnInit() {}

  private toggle($event, entity) {
    $event.preventDefault()
    $event.stopPropagation()

    if(this.isActive(entity)) {
      this.deactivate(entity);
    }
    else {
      this.activate(entity);
    }
  }

  private isActive(entity) {
    return _.includes(this.activeEntities, entity);
  }

  private deactivate(entity) {
    this.activeEntities = _.without(this.activeEntities, entity);
  }

  private activate(entity) {
    this.activeEntities = this.activeEntities.concat([entity]);
  }
}
