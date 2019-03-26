import * as _ from 'lodash'

import { Observable } from 'rxjs'

import {
  Component, OnInit, Input,
  Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'sunray-ui-site-learning-center-page-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input()
  activeItem: string

  @Input()
  resources$: Observble<iEntityCollection>

  @Input()
  resourceName$: Observable<string>

  @Output()
  itemEmitter: EventEmitter<any> = new EventEmitter()

  sanitizedResourceName: string;

  ngOnInit() {
    this.resourceName$.subscribe(resourceName => {
      this.sanitizedResourceName = this.sanitize(resourceName)
    })
  }

  onResourceSelected(name) {
    let event = {
      resource: name
    }

    this.itemEmitter.emit(event)
  }

  notUrl(url) {
    //return !_.includes(this.router.url, url);
    return true
  }

  isActiveItem(item) {
    return this.activeItem == item
  }

  private sanitize(resourceName: string): string {
    return resourceName.replace(/\-/, ' ');
  }
}
