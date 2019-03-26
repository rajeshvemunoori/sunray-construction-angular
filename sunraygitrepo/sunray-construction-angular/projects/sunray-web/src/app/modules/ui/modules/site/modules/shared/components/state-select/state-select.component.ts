
import {combineLatest as observableCombineLatest,  Observable } from 'rxjs'
import * as _       from 'lodash'

import { startWith ,  map ,  filter }    from 'rxjs/operators'

import {
  Component, OnInit, Input,
  EventEmitter, Output
} from '@angular/core'
import { FormControl }                  from '@angular/forms'
import { MatAutocompleteSelectedEvent } from '@angular/material'

import { startsWith } from '@ceo/core'

import { BaseComponent } from '../../imports'

@Component({
  selector: 'sunray-site-state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.scss']
})
export class StateSelectComponent extends BaseComponent {
  @Input()
  states$: Observable<any>

  @Output()
  stateEmitter: EventEmitter<any> = new EventEmitter<any>()

  stateControl: FormControl
  filteredStates$: Observable<any[]>
  states: any[] = []
  autocompleteInstance: any

  ngOnInit() {
    super.ngOnInit()
    this.states$.subscribe((states) => this.setStates(states))
    this.setupStates()
  }

  setStates(states) {
    this.states = states
  }

  setupStates() {
    this.stateControl = new FormControl()
    this.filteredStates$ = this.buildFilteredStates()
  }

  buildFilteredStates() {
    return observableCombineLatest(
       this.states$,
       this.stateControl.valueChanges.pipe(startWith(''))
     ).pipe(
     map(([collection, searchTerm]) => this.filterData(collection, searchTerm)))
  }

  filterData(collection, value) {
    let filter = {
      name: _.partialRight(startsWith, value)
    }
    return collection.filterByAttrs(filter)
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    var stateName = event.option.value
    this.stateEmitter.emit(stateName)
  }
}
