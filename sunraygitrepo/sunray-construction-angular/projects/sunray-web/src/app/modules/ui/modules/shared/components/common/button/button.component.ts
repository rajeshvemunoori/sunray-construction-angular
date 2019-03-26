import { 
  Output, Input, Component, OnInit, EventEmitter
} from '@angular/core';

@Component({
  selector: 'sunray-common-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  buttonText: string;

  @Output()
  clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  handleClick() {
    this.clickEmitter.emit();
  }
}
