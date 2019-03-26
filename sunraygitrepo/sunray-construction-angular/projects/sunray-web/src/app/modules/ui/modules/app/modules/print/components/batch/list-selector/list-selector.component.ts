import { 
  Input, Output, Component, 
  OnInit, EventEmitter
} from '@angular/core';

@Component({
  selector: 'sunray-ui-app-print-batch-list-selector',
  templateUrl: './list-selector.component.html',
  styleUrls: ['./list-selector.component.scss']
})
export class ListSelectorComponent implements OnInit {
  @Input()
  statuses: any[];

  @Input()
  status: string;

  @Output()
  loadEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}
}
