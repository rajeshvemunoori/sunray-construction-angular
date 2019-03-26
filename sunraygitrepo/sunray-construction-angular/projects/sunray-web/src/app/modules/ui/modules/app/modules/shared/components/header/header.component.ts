import { Observable }     from 'rxjs'

import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'

import { BaseComponent } from '../base'

@Component({
  selector: 'sunray-ui-app-shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent {

  searchClicked : boolean

  @Input()
  headerTitle: string

  @Input()
  buttonTitle: string

  @Input()
  searchFlag: boolean

  @Output()
  actionEmitter: EventEmitter<any> = new EventEmitter<any>()

  @Output()
  searchKeyEmitter: EventEmitter<any> = new EventEmitter<any>()

  handleClick() {
    this.actionEmitter.emit();
  }

  search(event) {
    this.searchKeyEmitter.emit(event)
  }

  focusin(){
    return this.searchClicked = true
  }
  focusout(){
    return this.searchClicked = false
  }

  getImageStatus()
  {
    if(this.searchClicked == true){
      return 'disabled';
    }
    else {
      return '';
    }
  }
}
