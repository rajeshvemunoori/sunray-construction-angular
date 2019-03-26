import {
  Component,
  OnInit,
  Input,
} from '@angular/core'

@Component({
  selector: 'sunray-site-layout-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  @Input()
  layoutService: any

  public collapsibles: any = {
    mobileDropdown : {
      collapsed: true
    }
  };
  constructor() { }

  ngOnInit() {
  }

  isCollapsed(collapsible) {
    return this.collapsibles[collapsible].collapsed;
  }

  toggleCollapsible(collapsible) {
    this.collapsibles[collapsible].collapsed =
      !(this.collapsibles[collapsible].collapsed)
  }
}
