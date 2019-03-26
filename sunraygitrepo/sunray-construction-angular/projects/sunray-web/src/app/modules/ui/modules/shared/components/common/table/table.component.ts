import { Observable } from 'rxjs';

import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'sunray-common-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  items$: Observable<any[]>;

  @Input()
  actionText: string;

  @Input()
  tableHeaders: any[];

  @Output()
  selectEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  selectEntity(entity): void{
    this.selectEmitter.emit(entity);
  }
}
