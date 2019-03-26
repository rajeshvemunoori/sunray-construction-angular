import {
  Component,
  OnInit,
  Input,
} from '@angular/core'

@Component({
  selector: "sunray-ui-site-layout-content",
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()
  layoutService: any

  constructor() { }

  ngOnInit() {
  }

}
