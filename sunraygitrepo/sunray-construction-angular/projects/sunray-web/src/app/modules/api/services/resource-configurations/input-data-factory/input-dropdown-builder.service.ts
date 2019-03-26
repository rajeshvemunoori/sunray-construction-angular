import {
  Observable,
  of as observableOf
} from 'rxjs'

import { Injectable } from '@angular/core';

import {
  kebabCase,
  pluralize,
  snakeCase,
} from '@ceo/core'

import {
  iEntity,
  iEntityCollection,
  DataService,
} from '@ceo/entity'

import {
  iInputResolvableTypeData,
} from '@ceo/shared'

import { InputDropdownOptionProvider } from './input-dropdown-option-provider.service'

import { resourceList } from './resource-list'

@Injectable({
  providedIn: 'root'
})

export class InputDropdownBuilder {
  private selectorData$: Observable<iEntityCollection>
  constructor(
    private dataService: DataService,
    private inputDropdownOptionProvider: InputDropdownOptionProvider
  ) { }

  provide(resolvable): iInputResolvableTypeData {
    var entityKey = 'name';
    var name = pluralize(resolvable.name.replace('_id', ''));
    let resource = resourceList.filter(item => item.key === name)
    if(resource.length > 0){
      entityKey = resource[0].value
      this.selectorData$ = this.getSelectors$(resource[0].name)
    }
    else{
      this.selectorData$ = this.getSelectors$(
        kebabCase(name)
      )
    }
    return this.inputDropdownOptionProvider.provide(this.selectorData$, entityKey);
  }

  getSelectors$(type) {
    let resourceOpts = {
      feature: "app",
      type: type
    }
    return this.dataService.get$(resourceOpts)
  }
}

