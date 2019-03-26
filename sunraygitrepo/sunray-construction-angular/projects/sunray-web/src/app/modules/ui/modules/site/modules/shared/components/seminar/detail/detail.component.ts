import { Observable }                 from 'rxjs'

import {
  Component, OnInit, OnDestroy
} from '@angular/core'

import {
  ActivatedRoute, Params
} from '@angular/router'

import { DataService }      from '@ceo/entity'

@Component({
  selector: 'sunray-site-seminar-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  entity$: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']
      this.getObj(id)
    })
  }

  getObj(id){
    let resourceOpts = {
      feature: 'cms',
      id: id,
      type: "seminars"
    }
    this.entity$ = this.dataService.get$(resourceOpts)
  }

  goToUrl(url) {
    window.open(url, "_blank")
  }
}
