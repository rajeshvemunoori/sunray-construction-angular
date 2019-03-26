import { Component } from '@angular/core'

import { BasePage } from '../../imports'

@Component({
  selector: 'sunray-site-seminar-single-page',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss']
})
export class SinglePage extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'primaryEntity$',
    ]
  }

  ngOnInit() {
    super.ngOnInit()
    this.entity$ = this.primaryEntity$
  }

  goToUrl(url) {
    window.open(url, "_blank")
  }
}
