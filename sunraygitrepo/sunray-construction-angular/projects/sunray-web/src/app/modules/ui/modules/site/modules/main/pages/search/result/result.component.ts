import {
  Component, OnInit
} from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { Observable }         from 'rxjs';
import { map }                from 'rxjs/operators';

import { DataService } from '@ceo/entity';

@Component({
  selector: 'sunray-ui-site-search-page-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  query: any;
  collection$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getRouteParams$()
      .subscribe((params) => {
        this.launch(params);
        this.searchPosts();
      });
  }

  getRouteParams$() {
    return this.route.queryParams;
  }

  launch(routeParams) {
    this.query = routeParams.query;
  }

  getResourceOpts() {
    return {
      feature: 'cms',
      type: "posts",
      filter: {
        s: this.query
      }
    };
  }

  searchPosts(){
    this.collection$ = this.dataService.get$(this.getResourceOpts());
  }
}
