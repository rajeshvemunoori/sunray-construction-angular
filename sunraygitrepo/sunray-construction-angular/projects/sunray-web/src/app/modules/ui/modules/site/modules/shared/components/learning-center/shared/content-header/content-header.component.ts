import { 
  Component, OnInit, Input 
} from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'sunray-site-learning-center-shared-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Input()
  heading: any;

  @Input()
  subHeading: any;

  constructor() { }

  ngOnInit() {
  }

}
