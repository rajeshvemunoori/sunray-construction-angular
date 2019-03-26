import * as _ from 'lodash'

import { Observable } from 'rxjs'

import { Component, OnInit } from '@angular/core';

import { iEntity } from '@ceo/entity'

import { DataService } from '../../services/data.service'

@Component({
  selector: 'sunray-ui-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [
    DataService,
  ],
})
export class LayoutComponent implements OnInit {
  private dataServicePropertyNames = [
    'navigationMenu$',
  ]

  private navigationMenu$: Observable<iEntity>

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.setDataServiceProperties()
    // this.navigationMenu$.subscribe(data => {
    //   debugger
    // })
  }

  private setDataServiceProperties() {
    let setDataServiceProperty = (propertyName) => {
      console.log("Going to set the " + propertyName)
      this[propertyName] = this.dataService[propertyName]
    }
    _.map(this.dataServicePropertyNames, setDataServiceProperty)
  }

}
