import { Component, OnInit } from '@angular/core'

import { Router }     from '@angular/router'

import { BaseComponent } from '../../imports'

@Component({
  selector: 'sunray-web-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent extends BaseComponent {
  constructor(
    private router: Router,
  ) {
    super()
  }

  onSubmit(f: any) {
    let searchParams = {
      queryParams: {
        'query': f.target.value
      }
    }
    this.router.navigate(['/search'], searchParams) 
    //this.modalRef.close("close")
  }
}
