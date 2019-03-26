
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class BatchItemService {

  constructor() { }

  getChildren(
    collection$: Observable<any>,
    item: any
  ) {
    if(item != null) {
      return collection$.pipe(map(collection => collection.children(item)));
    }
    return [];
  }
}
